let fruit = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit not equal to 'orange'? I predict True.");
console.log(fruit != 'orange');

// Tests using the lower case function
let city = 'New York';
console.log("Is city in lowercase 'new york'? I predict False.");
console.log(city.toLowerCase() == 'new york');

// greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15);

console.log("Is x greater than 3 or y greater than 15? I predict True.");
console.log(x > 3 || y > 15);