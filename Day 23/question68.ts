function multiplyDecimals (num1: number, num2: number): number{
//  Math.round() round of the decimal number.
    return Math.round((num1 * num2) * 100) / 100
}

console.log(multiplyDecimals(0.1,0.2))