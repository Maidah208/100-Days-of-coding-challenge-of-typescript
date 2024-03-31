function indexOfCode(str: string){
    return str.indexOf("code") //.indexOf() is used to find the position of certain text.
}

console.log(indexOfCode("I like to code in typescript.")) //Outputs the start position of "code"
console.log(indexOfCode("Coding in typescript is enjoying."))
console.log(indexOfCode("Start learning typescript today.")) // If the text isn't available than it will return -1