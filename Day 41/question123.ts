function logUntilVowel(str: string){
    let vowels = 'aeiouAEIOU';
    for( let char of str){
        if (vowels.includes(char)){
            console.log(`vowel found: ${char}`)
            break;
        }
    }
}

logUntilVowel('nxbujasnbx')