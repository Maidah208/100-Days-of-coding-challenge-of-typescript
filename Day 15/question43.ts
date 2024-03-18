let magician = ['Harry','David','Teller','Criss'];

function makeGreat(magician: string[]){
    let great_magician = [''];
    for (let magic of magician){
        great_magician.push('Great ' + magic);
    }
    return great_magician;
}
function showMagicians(magician: string[]){
    for (let magician_1 of magician){
        console.log(magician_1);
    }
}
let great_magician = makeGreat([...magician]);

console.log("Original magicians:");
showMagicians(magician);

console.log("Great magicians:");
showMagicians(great_magician);