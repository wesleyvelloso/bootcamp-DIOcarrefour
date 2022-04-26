const fruits = ["Apple", "Strawberry", "Pineapple", "Guava"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Map function
console.log(fruits.map((fruit) => fruit.toUpperCase()));
console.log(fruits.map((fruit) => fruit.includes("pple"))); // Returns in the copy array true or false for all strings.

// Filter function
console.log(fruits.filter((fruit) => fruit.includes("pple"))); // Returns in the copy array only the strings that contain "pple" 

console.log(fruits); // Dont' change the original array


// Exercises - https://github.com/stebsnusch/basecamp-javascript/tree/main/map-filter-reduce

// Returns in the copy array only the even numbers:
console.log(numbers.filter((number) => number % 2 == 0)); // OR function(number){ return number % 2 == 0 } 


// Map with "thisArg"- Returns the numbers multiplied by the argument:
const multiple = {
    mult2: 2,
}

function multMap(array, thisArg) {
    return array.map(function(number) {
        return number * this.mult2;
    }, thisArg);
}
console.log(multMap(numbers, multiple));

// Add all the numbers in the array:
console.log(numbers.reduce((sum, currentValue) => sum += currentValue, 0)); // By default, the second parameter (initalValue) is 0. So, call it is optional in this case.
// If the input is a string array, the reduce function will concatenate all the strings in one.


// Function that receives a price list and a number representing the available balance. Calculates the final balance after subtracting all prices from the submitted list:
const pricesList = [23.9, 50, 74.99, 43.99, 10.75, 120.99];

function finalBalance(prices, balance) {
    return prices.reduce((remain, currentValue) => remain -= currentValue, balance)
}
console.log(finalBalance(pricesList, 500));