// simple function
function area(length: number,width: number):number{
    return length*width
}

// Arrow function
// consice way of writing a function.
// SYNTAX: (a,b) => a-b
// (a,b) = parameters, => = symbol for defing the arrow function, a-b = arguments.
let rectangleArea = (width: number, height: number): number => width * height;
console.log(rectangleArea(6, 9)); 
