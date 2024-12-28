function factorial(n) {
    // Use a loop or recursion to calculate the factorial
    let result =1;
    for(i=n;i>=1;i--)
    {
        result=result*i;
    }
    return result;
  }
  console.log(factorial(4));  // Output: 24
  