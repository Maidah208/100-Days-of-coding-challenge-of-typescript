// importing named functions.
// You can have multiple named exports in a file.

import { multiply, add } from "./NamedExports";

console.log(`Multiply: ${multiply(5,2)}`)
console.log(`Add: ${add(2,3)}`)

// importing defaul function.
// You can only have one default export in a file.

import division from "./NamedExports";

console.log(`Division: ${division(6,2)}`)