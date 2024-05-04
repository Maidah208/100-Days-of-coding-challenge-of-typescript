// Reusing the person object from Question 133
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
// JSON.stringfy() converts the object into a JSON string with indentation.
// Since we are not applying any function therefore we put null.
// 2 i sthe no. of spaces we want to use for indentation.
  const jsonString = JSON.stringify(person, null, 2);
  console.log(jsonString);
