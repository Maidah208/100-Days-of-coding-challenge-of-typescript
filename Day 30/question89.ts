function returnNumber (number: string){
    return parseFloat(number) //parseFloat() converts the string of floating point number to floating point number.
}                             //parseInt() converts the string of  whole number to whole number

console.log(returnNumber('123.5698'))
console.log(returnNumber('1236'))