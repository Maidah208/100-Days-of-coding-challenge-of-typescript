function isValueNaN (value: any){
    return isNaN(value) //isNaN() not a number. check if the string is weather a number or not.
}

console.log(isValueNaN("abc")) //Output: true beacuse it is not a number.
console.log(isValueNaN("123")) //Output: false beacuse it does represent number.
console.log(isValueNaN(123)) //Output: false beacuse it is represent number.
console.log(isValueNaN('123abc')) //Output: true beacuse it is not a number.