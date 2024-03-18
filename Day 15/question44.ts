function make_snadwich (...items:string[]){
    console.log("Make snadwich with following items");
    for (let item of items){
        console.log(item);
    }
}
make_snadwich('cheese','chicken');
make_snadwich('Chicken','bacon','cheese','turkey','mayonise','ketchup');
make_snadwich('chicken');
