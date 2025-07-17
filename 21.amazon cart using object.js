// 1. creating object(product1) with properties(name:'BasketBall',price:'2095') and display the object
const product1 = {
    name: 'BasketBall',
    price: 2095
}
console.log(`product1 name: ${product1.name}\nproduct1 price: ${product1.price}`);

// 2. increase the price by 500 and display
console.log(`\nproduct2 name: ${product1.name}\nproduct2 price: ${product1.price+500}`);

// 3. using bracket notation, add property('delivery time') with value('3 days'), chang the product name to lowe case and display it.
const product2 = {
    name: 'BasketBall',
    price: 2096,
    'delivery-time': '3 days'
}

console.log(`\nproduct2 name: ${product2.name.toLowerCase()}\nproduct2 price: ${product2.price+500}\ndelivery time: ${product2['delivery-time']}`);
// 4. create a function to compare the two product price and display less expensive product
function comparePrice() {
    if(product1.price < product2.price){
        console.log(`\nless expensive one is: ${product1.price}`);
    }
    else{
        console.log(`\nless expensive one is: ${product2.price}`);
    }
}
comparePrice();

// create a function to compare the products property values are same and display true or false

function isSameProduct() {
    if(product1.name === product2.name && product1.price === product2.price) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

isSameProduct();