// Provided Code by SpringBoard
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

// CONVERTED TO ES2015

function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
}

// Provided Instruction by SpringBoard
// Write a function called findMin that accepts a varriable number of args and returns the smallest arg.
// Make sure to do this using rest and spread
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

function findMin(...nums) {
    // simplest way, does not use spread
    //return nums.reduce((smallest, value) => smallest < value ? smallest : value)
    // Below uses spread, but seems like cheating considering I'm using Math.min 
    return Math.min(...nums);
}

// Provided Instruction by SpringBoard
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Provided Instruction by SpringBoard
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function doubleAndReturnArgs(arr, ...rest) {
    const doubled = rest.map((value) => value * 2);
    return [...arr, ...doubled];
}

// Provided Code by SpringBoard
//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = ((items) => {
    let randIndex = Math.floor(Math.random() * items.length);
    return items.filter((value) => value !== items[randIndex]);
});

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
// https://codezup.com/add-dynamic-key-to-object-property-in-javascript/
// source for using [] around key for solution. Last way to dynamically assign new key : value pair to object


/** Return a new object with a key removed. */

const removeKey = ((obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
});


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });


/** Return a new object with a modified key and value. */

const update = ((obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
});