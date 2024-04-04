// This function calculates the sum of all numbers in an array

// ((accumulator, current) => accumulator + current, 0)
// Here accumulator and current are the parameters of arrow function. the initial value of accumulator is '0' and the initial value of current is by default the first element of the array.
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15
