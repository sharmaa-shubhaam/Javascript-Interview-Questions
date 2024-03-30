console.time();
const numbers = [52, 23, 88, 71, 205, 236, 458, 52, 99, 1123, 65, 256];

// sort the array.
let sort_numbers = numbers.sort((a, b) => a - b);
let safe = 0;

// Place Highest Number in the seventh place in the array.
safe = sort_numbers[6];
sort_numbers[6] = sort_numbers[numbers.length - 1];
sort_numbers[numbers.length - 1] = safe;

// second number must be greater than last number.
if (sort_numbers[1] < sort_numbers[sort_numbers.length - 1]) {
   safe = sort_numbers[1];
   sort_numbers[1] = sort_numbers[sort_numbers.length - 1];
   sort_numbers[sort_numbers.length - 1] = safe;
}

// sum of 6 and 8 in the array not be greate than second last number.
if (sort_numbers[5] + sort_numbers[7] > sort_numbers[sort_numbers.length - 2]) {
   safe = sort_numbers[0];
   sort_numbers[0] = sort_numbers[5];
   sort_numbers[5] = safe;
}

// Final answer
console.log(sort_numbers);
console.timeEnd();
