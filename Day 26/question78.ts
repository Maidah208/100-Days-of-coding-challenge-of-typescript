// Function declarations are defined using the function keyword followed 
// by the function name, parameter list, and function body. 
function squareDeclaration(number: number): number{
    return number * number
}
console.log(`Function Declaration`)
console.log(squareDeclaration(5))

// Function expressions define functions using variable assignment. 
// The function is assigned to a variable as a value
let square = function squareExpression(number: number): number{
    return number * number
}
console.log(`Function Expression`)
console.log(square(4))