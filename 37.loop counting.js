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


// count positive numbers in an array using function
function countPositive(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log(countPositive([2,-1,1,-100]));


// find min max number

function minMax(array) {
    let result = {min:0, max:0};
    for(let i =0; i < array.length; i++) {
        if(array[i] < result.min) {
            result.min = array[i];
        }
        else if(array[i] > result.max) {
            result.max = array[i];
        }
    }
    return result;
}
console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));

console.log(minMax([]));
console.log(minMax([5]));
*/

// count words using function

function countWords(words) {
    const result = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // result[word] adds/accesses a property using whatever is
        // saved inside the 'word' variable.
        // If word = 'apple', result[word] will do result['apple']
        // If word = 'grape', result[word] will do result['grape']
        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }

    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));