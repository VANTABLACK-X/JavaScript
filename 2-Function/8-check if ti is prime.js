function isPrime(n) {
    // Return true if n is prime, otherwise false
    if (n % 2 === 0 || n % 3 === 0) 
        {
            return false;
        }
        return true;
  }
  console.log(isPrime(5));  // Output: false
  