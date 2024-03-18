let Guests = ['Maidah','khudaja','Mahnoor'];
console.log('Good News! I have found a bigger table\n');
Guests.splice(0,0,'Miraal');
Guests.splice(1,0,'Mehak');
Guests.push('Maasfa');
// Invinting the rest guests
for(let guest of Guests){
    console.log('Dear ' + guest + ' you are invited for dinner.');
}