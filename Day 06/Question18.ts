let places_to_visit = ['Maildives','Singapore','Italy', 'Pyramids','Barcelona'];

console.log('Original Array');
console.log(places_to_visit);

console.log('Sorted Array ');
console.log([...places_to_visit].sort());

console.log('Original Array');
console.log(places_to_visit);

console.log('Sorted and reversed array');
console.log([...places_to_visit].sort().reverse());

console.log('Original Array');
console.log(places_to_visit);

places_to_visit.reverse();
console.log('Reverse Order Array');
console.log(places_to_visit);

places_to_visit.sort();
console.log('Aplphabetical Order Array');
console.log(places_to_visit);

places_to_visit.sort().reverse();
console.log('Reverse Alphabatical Order Array');
console.log(places_to_visit);