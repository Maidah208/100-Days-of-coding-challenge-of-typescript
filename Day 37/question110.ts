function grade(grade: number){
    if (grade >= 80){
        return (`A+ grade`)
    }else if (grade >= 70){
        return (`A grade`)
    }else if (grade >= 60){
        return (`B grade`)
    }else if (grade >= 50){
        return (`C grade`)
    }else if (grade >= 40){
        return (`D grade`)
    }else{
        return (`Fail`)
    }
}
console.log(grade(85))
console.log(grade(75))
console.log(grade(65))
console.log(grade(55))
console.log(grade(45))
console.log(grade(35))
