function addNumberString (number: number, string: string): number{
//  Number() changes string "6" to a number
//  and if the string is "maam" then the answer will be NaN(not a number)
    return number + Number(string)
}

console.log(addNumberString(5,'10'))