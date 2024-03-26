function quotientAndRemainder (num1: number, num2: number): {quotient: number, remainder: number}{
    let quotient = Math.round((num1 / num2) * 100) / 100;
    let remainder = num1 % num2
    return {quotient,remainder};
}

console.log(quotientAndRemainder(4556.25,958.36))