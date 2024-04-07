function personAgeGroup(age: number){
    if (age < 13){
        return `Child`
    }else if(age >= 13 && age <= 19 ){
        return `Teenager`
    }else{
        return `Adult`
    }
}

console.log(personAgeGroup(20))
console.log(personAgeGroup(10))
console.log(personAgeGroup(15))
