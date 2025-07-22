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
console.log('\n');

// add one [1,2,3] => [2,3,4]

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i]++;
    }
    return array;
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,1,100]));
console.log('\n');

// add array values by specified number

function addNum(array,num) {
    for(let i = 0; i < array.length; i++) {
        array[i] += num;
    }
    return array;
}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));
console.log('\n');

// add array numbers by specified array numbers

function addNum(array1,array2) {
    let addArray = [];
    for(let i = 0; i < array1.length; i++) {
        sum = array1[i] + array2[i];
        addArray.push(sum);
    }
    return addArray;
}
console.log(addNum([1,1,2],[1,1,3]));
console.log(addNum([1,2,3],[4,5,6]));
console.log('\n');
*/

// count positive numbers in an array using function
function countPositive(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            count++;
        }
    }
    return count;
}
console.log(countPositive([-2,-1,1,-100]));