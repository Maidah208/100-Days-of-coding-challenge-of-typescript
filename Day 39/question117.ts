function evaluateGrade(string: string){
    string = string.toUpperCase()
    switch(string){
        case 'A':
            console.log(`Good`);
            break;
        case 'B':
            console.log(`Well Done`);
            break;
        case 'C':
            console.log(`Fair`);
            break;
        case 'D':
            console.log(`Poor`);
            break;
        case 'F':
            console.log(`Fail`);
            break
        default:
            console.log(`Invalid Grade.`)
    }
}

evaluateGrade('a');
evaluateGrade("H");

