let veryLargeNum = 123456789012345678901234567890n;
let anotherLargeNum = 98765432109876543210n;

console.log("Addition:", veryLargeNum + anotherLargeNum);
console.log("Multiplication:", veryLargeNum * 2n);
console.log("Division:", veryLargeNum / 2n);

let x = Math.floor(Math.random()*10); 
console.log("Random number:", x);

let time = 19;
if (time < 18) {
    console.log("Good day");
}