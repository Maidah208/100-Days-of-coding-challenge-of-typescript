let car:string = 'subaru';

console.log('Is car == \'subaru\'? I predict True.')
console.log(car == 'subaru');

console.log('Is car == \'Subaru\'? I predict False.');
console.log(car == 'Subaru');

console.log('Is car == \'Honda\'? I predict False.')
console.log(car == 'Honda');

console.log('Is car == \'subaru\'? && car != \'Honda\' I predict True.')
// @ts-ignore
console.log(car == 'subaru' && car != 'Honda');

console.log("Is car == 'subaru'? || car != 'honda'? I predict True.");
console.log((car as string) == 'subaru' || car != 'honda');

console.log("Is the length of car greater than 5? I predict True.");
console.log(car.length > 5);

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

console.log("Is car == 'honda' ?I predict True.");
console.log(car != 'honda');

console.log("Is car == 'honda' && car != 'toyota'? I predict False.");
console.log((car as string) == 'honda' && car != 'toyota'); 

console.log("Is the length of car greater than 5? I predict Falsee.");
console.log(car.length < 5);