function compareString(string1:string, string2:string){
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    return string1 === string2
}

console.log(compareString('Hello','heLLo'))
console.log(compareString('Hello','WorLd'))