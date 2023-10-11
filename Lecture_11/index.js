// function with parameter and return value
function onePlusAvg(x, y) {
    return 1 + (x+y)/2;
}

let a = 5;
let b = 10;
let c = 15;

console.log("one plus average of a and b is :", onePlusAvg(a, b));
console.log("one plus average of a and b is :", onePlusAvg(b, c));
console.log("one plus average of a and b is :", onePlusAvg(a, c));

// another way of writing function with parameter and return value
const sum = (p, q) => {
    return p + q;
}

console.log("sum :", sum(9, 2));
console.log("sum :", sum(10, 20));
console.log("sum :", sum(5, 23));

// function without any parameter and return value
const hello = () => {
    console.log("Hello ji..");
}

hello();