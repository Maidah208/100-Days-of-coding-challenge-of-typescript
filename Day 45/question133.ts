// JSON (JavaScript Object Notation)
// JSON.stringify() is like your helper that takes all the pieces of data you have and puts them together neatly in a way that's easy to handle and work with in your code.

let person = {
    name: "Daniel",
    age: 24,
    nation: "Imagination",
};

let json = JSON.stringify(person);
console.log(json);
// console.log(person)