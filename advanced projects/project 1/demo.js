function asyncTask(delay, value, shouldFail = false) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject(`Failed: ${value}`);
            else resolve(`Success: ${value}`);
        }, delay);
    });
}

// Test 1: Basic chaining
asyncTask(1000, 'One')
    .then((res) => {
        console.log(res);
        return asyncTask(1000, 'Two');
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

// Test 2: Promise.all
MyPromise.all([
    asyncTask(500, 'A'),
    asyncTask(1000, 'B'),
    asyncTask(1500, 'C')
]).then((results) => {
    console.log("All results:", results);
}).catch((err) => {
    console.error("Error in Promise.all:", err);
});
