/*
const product = {
  name: 'socks',
  price: 1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);
*/





/*
const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  // nested object
  rating: {      
    stars: 4.5,
    count: 87
  },
  //function inside object called method
  fun: function function1() {
    console.log('function inside object');
  }
};
console.log(product2);
// dot notation
console.log(product2.name); 
console.log(product2['name']);
// bracket notation if dot notation don't work   
console.log(product2['delivery-time']);
 
console.log(product2.rating.count);
product2.fun();

console.log(typeof console.log);

// JSON don't support function in an object
// Object to JSON (JSON means convert object to string using stringify())
console.log(JSON.stringify(product2));
// JSON to Object (to convert JSON to object uses parse())
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
*/





// Auto Boxing Automatically wraps a string inside an object to use methods
console.log('hello'.length);
console.log('hello'.toUpperCase());

// when we create an object with values. the values stored in the computer memory somewhere. object1 is just a name that refers to the stored value. its like a short cut key.
const object1 = {
  message: 'hello',
  price: 799
};
// when we assign object1 to object2 it don't create a copy it simply saves the reference. like object2 refers to object1 and object1 refers to the value stored.
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good job!',
  price: 799
};
// even object3 properties are same as object1 it doesn't compare the object properties it compares the references(names) thats why its false. 
console.log(object1 === object3);

// const message = object1.message;
const { message, price: cost } = object1; // destruct
console.log(message);
console.log(cost);

const object4 = {
  message: message,
  message, // short hand property
  // method: function function1() {
  // console.log('method');
  // },
  method() {
    console.log('method');
  }
};
console.log(object4);
object4.method();