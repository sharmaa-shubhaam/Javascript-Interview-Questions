// Write a JavaScript function that takes an array of numbers and
// returns a new array with only the even numbers.

const ArrayWithEvenNumber = (array) => array.filter((num) => num % 2 == 0).sort((a, b) => a - b);

const result = ArrayWithEvenNumber([2, 5, 8, 12, 16, 13, 74, 58]);
console.log(result);
