// This function filters an array, keeping only numbers greater than 10.

// (number => number > 10): Here, number is a placeholder for each element in the numbers array. The arrow function number => number > 10 checks if each number is greater than 10. If it is, it keeps that number in the new array.
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

let numbers: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Output: [15, 20, 25]


