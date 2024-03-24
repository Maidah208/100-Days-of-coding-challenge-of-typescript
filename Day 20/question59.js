function createAdder(specialNumber) {
    function adder(number) {
        return number + specialNumber;
    }
    return adder;
}
var adder5 = createAdder(5); // Creates an adder that adds 5 to any number
console.log(adder5(10));
console.log(createAdder(4)(5));
