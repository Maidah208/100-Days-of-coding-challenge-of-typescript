

let words: string[] = ["Pyhton", "Next.js", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
// (word => word.length): 'word' is the looping variable, '=>' is the arrow function that return 'word.length'
let lengths: number[] = words.map(word => word.length);

console.log(lengths); // Output: [6, 7, 10, 10]
