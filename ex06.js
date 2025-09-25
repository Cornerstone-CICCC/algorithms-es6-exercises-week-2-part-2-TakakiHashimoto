// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [1, 2, 3, 44, 2, 5, 9, 10, 11, 2222, -1];

const isPositive = numbers.every(num => {
    return num > 0;
})

console.log(isPositive);