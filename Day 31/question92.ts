// 'removeElement' is the name of the function.
// <T> tells the function that it can work with any data type (string,numeric,boolean etc.)
// (array: T[]) = array is the variable name and ":T[]" is the type of 'array'. It means that the variable is an array([])
// and it can be ot any type(T)
// :T | undefined = Rturn Type of the function, that can be of any type(T) or 'undefined' (when the array is empty).

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. 
// This can be useful when you need to work with the removed item.
function removeElement <T> (array: T[]): T | undefined{
    return array.pop()
}
let array = ["Mango","Apple","9",89]
console.log(`Initial Array: ${array}`)
console.log(`Removed Element: ${removeElement(array)}`);
console.log(`Final Array: ${array}`);
let arr = []
console.log(removeElement(arr))
// Another way of solving the same question.
function remove (arr: any[]): any{
    return arr.pop()
}
console.log(`Initial Array: ${array}`)
console.log(remove(array));
console.log(`Final Array: ${array}`);
console.log(remove(arr));