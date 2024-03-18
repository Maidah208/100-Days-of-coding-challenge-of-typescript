let guests = ['Maidah','khudaja','Mahnoor'];
let willnot_attend = guests[1];
console.log('Unfortunately ' + willnot_attend + ' can\'t make to dinner.');

//adding another guest
guests.splice(1,1,'Mirha');
for(let guest of guests){
    console.log('Dear ' + guest + ' you are invited for dinner at my place.');
}