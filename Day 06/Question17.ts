let Guests = ['Maidah','khudaja','Mahnoor'];
console.log('Unfotunately the dinner table is not available, so I can only invite two people.c');
//removing guest 
while (Guests.length > 2) {
    let remove_guest = Guests.pop();
    console.log('I am sorry I can \'t invite ' + remove_guest + ' to dinner.');
}
// invinting the rest of the guest
for (let guest of Guests){
    console.log(guest + ' ,you are still invited.');
}
// Emptiying the guest list
Guests.splice(0, Guests.length);
console.log(Guests); // Shows an empty list