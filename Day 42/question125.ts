// 'this' is a keyword that refers to the object.

let circle = {
    pie: 3.142,
    radius: 4,
    area: function(){
        return this.pie * (this.radius ** 2)
    },
};
console.log(circle.area())

