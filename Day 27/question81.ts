function properties(obj: object) {
    for (let property in obj){
        console.log(`${property}: ${obj[property]}`)
    };
};

properties({name: "David", age: 24, hobby: "Reading"});
