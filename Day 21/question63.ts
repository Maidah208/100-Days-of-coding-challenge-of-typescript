type shape = {
    kind: 'circle' | 'triangle';
    radius?: number;
    base?: number;
    length?: number;
};

let circle: shape = {
    kind: 'circle',
    radius: 5

};

let triangle: shape={
    kind: "triangle",
    length: 9,
    base: 6
}
console.log(triangle)
console.log(circle)