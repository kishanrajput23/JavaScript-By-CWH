// Primitive Data Types
/* 
N --> Null
N --> Number
S --> Symbol
S --> String
B --> Boolean
B -->BigInt
U --> Undefined
*/

let a = null;
let b = 789;
let c = Symbol("I'm a symbol");
let d = "Kishan";
let e = true;
let f = BigInt(697) + BigInt(3);
let g = undefined       // we can also define this like let g;

console.log(a, b, c, d, e, f, g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// Non Primitive Data Types

const item = {
    "kishan" : true,
    "nayan" : false,
    "utpal" : undefined
}

console.log(item["kishan"]);
console.log(item["rahul"]);     // this will not give an error instead it will print undefined