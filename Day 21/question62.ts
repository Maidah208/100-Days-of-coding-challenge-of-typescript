// interface face is a way to define of how the object will look like(structured).
interface student {
    name: string,
    class: string,
    age: number,
    courses: string[]
}

let studentInfo: student = {
    name: "Maidah",
    class: "2nd Year",
    age: 20,
    courses: ["Calculus","Accounting","Finance","Economics"]
}

console.log(studentInfo);