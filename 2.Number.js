// This code calculates the total price of items in a shopping cart, including tax, and then finds the average price per player.
let basketball = 2095; // price in cents 2095 = 20.95$
let tShirt = 799;
let tax_percentage = 10;
let product_total;
let tax_total;
let final_total;

product_total = basketball + tShirt * 3;
tax_total = Math.round(product_total * (tax_percentage / 100));
final_total = Math.round(product_total + tax_total);
console.log("Product Total: " + product_total / 100 + "$");
console.log("Tax Total(10%): " + tax_total / 100 + "$");
console.log("Order Total: " + final_total / 100 + "$");

// 3 players purchased this now find the average price per player
let players = 3;
let average_price_per_player = final_total / players;

console.log("Average Price per Player: " + average_price_per_player / 100 + "$"); 