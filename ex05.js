// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 2, 3, 44, 2, 5, 9, 10, 11, 2222];

const hasEven = numbers.some(num => {
    return num % 2 === 0;
})

console.log(hasEven);