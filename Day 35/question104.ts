function randomHexadecimalColor() {
    let hexaDigits = '0123456789ABCDEF';
    let colorCode = '#';
    for(let i = 0; i <= 5; i++){
        let randomHexaDigit = Math.floor(Math.random() * 16)
        colorCode += hexaDigits[randomHexaDigit]
    }
    return colorCode
}
console.log(randomHexadecimalColor())