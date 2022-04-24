// Exercise 1 - https://github.com/stebsnusch/basecamp-javascript/tree/main/colecoes

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value == 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Wesley', 'Admin');
users.set('Stephany', 'Admin');
users.set('Jorge', 'User');
users.set('Natália', 'Admin');
//console.log(getAdmins(users));

// Exercise 2

const numbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array) {
    const mySet = new Set(array);
    return [...mySet]; // Spread 

}
//console.log(uniqueValues(numbers));


// Try-catch examples:

function isPalindrome(string) { // returns true if the string is palindrome
    if (!string) throw "Invalid string!";

    return string === string.split('').reverse().join('');
}

function tryPalindrome(string) {
    try {
        console.log(isPalindrome(string))
    } catch (error) {
        throw error;
    }
}

function tryPalindrome2(string) {
    try {
        console.log(isPalindrome(string))
    } catch (error) {
        console.log(error)
    }
}

function tryPalindrome3(string) {
    try {
        console.log(isPalindrome(string))
    } catch (error) {
        throw error;
    } finally {
        console.log('The string tested was: ' + string);
    }
}
//tryPalindrome("anna");
//tryPalindrome2('');
//tryPalindrome3('bob');


//Exercise 3 - https://github.com/stebsnusch/basecamp-javascript/tree/main/debug-error

const sizeError = new Error('Invalid size!');
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const number = 10;


function testArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Missing parameters!");
        if (typeof array != 'object') throw new TypeError("Array type must be object!");
        if (typeof num != 'number') throw new TypeError("'num' type must be number!");
        if (num != array.length) throw new RangeError("Array size don't match!");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) throw error;
        if (error instanceof TypeError) throw error;
        if (error instanceof RangeError) throw error;
    }
}

console.log(testArray(fibonacci, 11));
console.log(testArray());
console.log(testArray(number, 10));
console.log(testArray(fibonacci, "size"));
console.log(testArray(fibonacci, 20));


//testArray()
//testArray(number, 10);
//testArray(fibonacci, "size");
//testArray(fibonacci, 20);