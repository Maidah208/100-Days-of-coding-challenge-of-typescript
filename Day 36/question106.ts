function checkLeapYear(year: number){
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 
}

console.log(checkLeapYear(2024))
console.log(checkLeapYear(2022))