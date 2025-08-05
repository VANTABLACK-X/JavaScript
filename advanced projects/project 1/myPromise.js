class MyPromise {
    static PENDING = "PENDING";
    static FULFILLED = "FULFILLED";
    static REJECTED = "REJECTED";

    constructor(executor) {
        this.state = MyPromise.PENDING;
        this.value = undefined;
        this.reason = undefined;

        // Store callbacks
        this.thenCallbacks = [];
        this.catchCallback = null;

        // Bind resolve and reject to this instance
        const resolve = (value) => {
            queueMicrotask(() => {
                if (this.state !== MyPromise.PENDING) return;
                this.state = MyPromise.FULFILLED;
                this.value = value;
                this.thenCallbacks.forEach((cb) => cb(value));
            });
        };

        const reject = (reason) => {
            queueMicrotask(() => {
                if (this.state !== MyPromise.PENDING) return;
                this.state = MyPromise.REJECTED;
                this.reason = reason;
                if (this.catchCallback) {
                    this.catchCallback(reason);
                }
            });
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled) {
        return new MyPromise((resolve, reject) => {
            const handleSuccess = (value) => {
                try {
                    const result = onFulfilled(value);
                    if (result instanceof MyPromise) {
                        result.then(resolve).catch(reject);
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            };

            if (this.state === MyPromise.FULFILLED) {
                queueMicrotask(() => handleSuccess(this.value));
            } else {
                this.thenCallbacks.push(handleSuccess);
            }
        });
    }

    catch(onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleError = (error) => {
                try {
                    const result = onRejected(error);
                    if (result instanceof MyPromise) {
                        result.then(resolve).catch(reject);
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            };

            if (this.state === MyPromise.REJECTED) {
                queueMicrotask(() => handleError(this.reason));
            } else {
                this.catchCallback = handleError;
            }
        });
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            let results = [];
            let completed = 0;

            promises.forEach((promise, i) => {
                MyPromise.resolve(promise).then((value) => {
                    results[i] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                }).catch(reject);
            });
        });
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}
