// when 'this' is used inside the nested function of the object than it does not refer to the valus of object. it depends how the function is called. If the nested function is defined with the 'function' keyword than this will not refer to the object property but it will refer to thhe global object(e.g windows)

let obj = {
    name: "Alice",
    outerMethod: function() {
        console.log(this.name); // Refers to obj

        function innerFunction() {
            console.log(this.name); // Refers to the global object (e.g., window)
        }
        innerFunction();
    }
};

obj.outerMethod(); // Output: "Alice", undefined (or causes an error in strict mode)


// to solve this arrow function '=>' can be used inside the ensted function bcz arrow function bind the value of 'this' to it's surrounding context.

let person = {
    name: "Alice",
    outerMethod: function(){
        console.log (this.name); // Refers to the object

        let innerMethod = () => {
            console.log(this.name); // Refers to the surrounding context that is the object.
        };

        innerMethod(); // Ouput: Alice, Alice
    },
};

person.outerMethod()