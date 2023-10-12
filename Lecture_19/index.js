// simple for loop
let fruits = ["Apple", "Orange", "Banana"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// fro each loop
let num = [1,2,3,4,5,6,7,8,9];
num.forEach((element) => {
    console.log(element*element);
})

// array from
let name = "kishan";
let arr = Array.from(name);
console.log(arr);

// for of
let num1 = [12,32,4,23,45,675,43]
for (let i of num1) {
    console.log(i);
}

// for in
for (let i in num1) {
    console.log(i)
}