let names:string[]= ['Eric','Admin','Henry','Adrian','Lia'];
for (let name of names ){
    if (name =='Admin'){
        console.log('Hello ' + name + ', would you like to see a status report?');
    }else{
        console.log('Hello ' + name + ', thankyou for log in again.');
    }
}