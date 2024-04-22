// 'this' is a special keyword that refers to the object.

let person = {
    name: "Alice",
//  functionName: function(parameters){
//  function body}
    getName: function(){  //defining an anonymous funtion inside the object.
        return this.name
    },
};
console.log(person.getName()) //calling the function.

