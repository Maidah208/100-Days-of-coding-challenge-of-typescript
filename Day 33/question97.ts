function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDateFormatted());

// new Date() is the object that represent current date and time.
// .getDate(), .getMonth(), .getFullYear() are the methods of date object.
// .padStart() is a function that ensures that a string has a certain length by padding it with a specified character (or characters) at the beginning.
// String() converts the other data types into strings


