let basketball=20.95;
let tShirt=7.99;
let tax_percentage=10;
let product_total;
let tax_total;
let final_total;

product_total = basketball + tShirt *2;
tax_total = product_total * (tax_percentage / 100);
final_total = product_total + tax_total;
console.log("Product Total: " + product_total + "$");
console.log("Tax Total(10%): " + tax_total + "$");
console.log("Order Total: " + final_total+"$");