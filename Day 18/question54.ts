function createDynamicObject(key: string, value: string){
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject
}

console.log(createDynamicObject("color","red"));

