let grades = [25,26,21,19,30,14];
let sum: number = 0
for (let grade of grades){
    sum += grade
}
let avg = sum/grades.length
console.log(`Average: ${avg}`);