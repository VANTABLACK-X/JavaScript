function greet(name) {
    if (name) {
      return "Hello, " + name;
    }
    return;  // returns undefined if no name is provided
  }
  
  let greeting = greet("Alice");
  console.log(greeting);  // Output: Hello, Alice!
  
  let noGreeting = greet();
  console.log(noGreeting);  // Output: undefined