// 1. create a function called greet that prints hello.
function greet() {
    console.log("Hello");
}   
greet(); // Call the function to see the output

// 2. add a parameter to the function called name
function greet1(name) {
    console.log(`Hello ${name}`);
}

greet1("Simon"); // Call the function with a name parameter

// 3. calling the function without a name and if the value is undefined, print "Hello There"
function greet2(name) {
    if (name === undefined) {
        console.log("Hello There");
    } else {
        console.log(`Hello ${name}`);
    }
}
greet2(); // Call the function without a name
greet2("Alice"); // Call the function with a name parameter 