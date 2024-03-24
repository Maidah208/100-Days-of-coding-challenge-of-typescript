let mixedArray = [1,"Banana",4,5,"Apple","Orange",7,"Guava",true];
let stringArray: string[] = [];

// for loop to iterate over each element of array
for (let value of mixedArray){
//  conditional statement to check the type of the array
    if (typeof value === "string"){
//      pushing the value value to empty array if the value is string
        stringArray.push(value);
    }
}

console.log(stringArray);
