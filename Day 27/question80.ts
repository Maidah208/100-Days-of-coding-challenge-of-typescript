// You can explicitly declare the property in the type definition to prevent 
// TypeScript from raising an error when accessing or modifying it.
// while the value of key can be changed without any efforts.
let car: {make: string, model: string, year: number, color?: string} = {
    make: "Honda",
    model: "Civic",
    year: 2022,
};
car.color = "Black";
car.year = 2021;
console.log(car)

// or make an interface for car
interface car {
    make: string,
    model: string,
    year: number,
    [key: string]: any,
}

let Car: car = {
    make: "Honda",
    model: "Civic",
    year: 2022
};

Car.color = "White"
Car.year = 2021

console.log(Car)
