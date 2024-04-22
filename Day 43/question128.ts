let multiply = (...numbers: number[]) => {
    return numbers.reduce((product, num) => num * product, 1)
}

console.log(multiply(2,3,4))

// numbers.reduce(callback, initialValue)
// callBack must be a function of any type.
// numbers is the array ,.reduce() is a method ,callback is the arrow function inside the the .reduce() and initial value is 1.

// Example call: multiply(2, 3, 4)
// Expected output: 2 * 3 * 4 = 24

// Step 1: Initial setup
// numbers = [2, 3, 4]
// product = 1 (initial value)

// Step 2: Iteration 1
// product = 1 * 2 = 2 (product = 2)

// Step 3: Iteration 2
// product = 2 * 3 = 6 (product = 6)

// Step 4: Iteration 3
// product = 6 * 4 = 24 (product = 24)

// Step 5: End of array, return final result
// Final result: 24
