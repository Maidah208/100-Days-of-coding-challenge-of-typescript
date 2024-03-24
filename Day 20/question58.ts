function average(...marks: number[]){
    let sum = 0
    for (let mark of marks){
        sum += mark
    }
    let avg = sum / marks.length
    return avg
}

console.log(average(56,62,69,64,68));