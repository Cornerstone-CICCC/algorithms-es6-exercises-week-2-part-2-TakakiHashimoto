// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [1, 2, 3, 44, 2, 5, 9, 10, 11, 2222]
const firstAboveTen = numbers.find((num) => num > 10);

console.log(firstAboveTen);