// array map method
let arr = [43,65,78,98];
let a = arr.map((value) => {
    console.log(value);
})
console.log("-----------")

let b = arr.map((value, index) => {
    console.log(value, index);
})

console.log("-----------")

let c = arr.map((value, index, array) => {
    console.log(value, index, array);
})

// array filter method
let arr1 =[2,23,12,4,45,6,78,9,55];
a1 = arr1.filter((value) => {
    return value>10;
})
console.log(a1);

// array reduce method
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((first, second) => {
    return first + second;
});
console.log(sum); 