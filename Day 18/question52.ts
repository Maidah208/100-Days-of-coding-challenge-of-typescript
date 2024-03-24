// Question 52: Make a Smartphone Object: 
// Create a simple way to keep track of a smartphone's details.
//  Include its brand, model, and other key features like how much storage it has, 
// the size of its screen, and how long its battery lasts.

// Explain & TIP: Just like a box can contain smaller boxes, 
// objects can contain other objects. This helps organize related information neatly.

let smartphone = {
    brand: "Sony",
    model: "Xperia XZ3",
    features: {
        screenSize: "150 mm",
        storage: "64 GB",
        battery: "3300 mAh"
    }
}
console.log (`This is ${smartphone.brand} ${smartphone.model} having ${smartphone.features.screenSize} screensize, ${smartphone.features.battery} battery and ${smartphone.features.storage} storage.`)