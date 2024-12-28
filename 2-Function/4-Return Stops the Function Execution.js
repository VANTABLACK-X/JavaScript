function checkNumber(number) {
    if (number < 0) {
      return "Negative number";
    }
    return "Positive number";
    console.log("This line will never be reached.");  // This won't run
  }
  
  console.log(checkNumber(-5));  // Output: Negative number
  console.log(checkNumber(10));  // Output: Positive number
  