let numbers = [1,2,3,4,5,6,7,8,9];

for(let number of numbers){

    let ordinal_ending:string = '';
    
    if (number == 1){
        ordinal_ending = 'st';
    }else if(number == 2){
        ordinal_ending = 'nd';
    }else if (number == 3){
        ordinal_ending = 'rd';
    }else {
        ordinal_ending = 'th';
    }
    console.log(number+ordinal_ending);
}
