/*---- change the last array value
const myArray = [10, 20, 30];
const lastArray = myArray.length - 1;
myArray[lastArray] = 99;
console.log(myArray);

//--- display the last array value

const myArray1 = [1, 20, 22, 24, 5];
const myArray2 = ['hi', 'hello', 'good'];

getLastValue(myArray1);
getLastValue(myArray2);

function getLastValue(arrayValue) {
    const lastArray = arrayValue.length - 1;
    console.log(arrayValue[lastArray]);
}
*/

//arraySwap(myArray2);

function arraySwap(array) {
    const lastIndex = array.length - 1;

    // We need to save the values first before
    // swapping. Otherwise, if we swap directly,
    // we would lose one of the values.
    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));