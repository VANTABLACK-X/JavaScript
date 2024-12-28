function calculate(a, b, operator) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    } else if (operator === '/') {
      return a / b;
    } else {
      return "Invalid operator";
    }
  }
  
  console.log(calculate(10, 2, '-'));  // Output: 20
  