function checkJavascript(str: string){
    return str.toLowerCase().includes("javascript") // convert the string to lower case than
}                                                   // checks if javascript is included or not.

console.log(checkJavascript("I like to code in Javascript.")) // Output: true
console.log(checkJavascript("I like to code in python.")) // Output: false