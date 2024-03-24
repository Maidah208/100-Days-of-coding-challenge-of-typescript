
function userProfile() {
    let name = "Maidah";
    let age = 20;
    return {
        // when you want to define a function within an object literal use
        // propertyName: function() { ... }
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
}

userProfile().displayInfo()
