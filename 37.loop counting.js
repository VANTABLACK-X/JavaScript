/* display 0,2,4,6,8,10 using loop
for(let i = 0; i <= 10; i+=2) {
    console.log(i);
}
console.log('\n');

// countdown 5 to 0
for(let i = 5; i >= 0; i--) {
    console.log(i);
}
console.log('\n');

//use while loop for two above
let i = 0;
while(i <= 10) {
    console.log(i);
    i += 2;
}
console.log('\n');

let j = 5;
while(j >= 0) {
    console.log(j);
    j--;
}

// add one [1,2,3] => [2,3,4]

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i]++;
    }
    return array;
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,1,100]));

// increment array value by specified number

function addNum(array,num) {
    for(let i = 0; i < array.length; i++) {
        array[i] += num;
    }
    return array;
}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));
*/