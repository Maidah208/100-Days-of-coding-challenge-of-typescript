// Math.floor() round off the number to the nearest decimal.
// Math.random() generates random numbers between 0 & 1.

function randomNumber(): number{
    return Math.floor(Math.random() * 10) + 1
}

console.log(randomNumber())