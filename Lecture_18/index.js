let num = [1,2,3,4,5,6,7,8,9];
console.log("Array length before deletion : ", num.length);
delete num[0];
console.log("Array length after deletion : ", num.length);
console.log(num);

let num1 = [1,2,3,4,5,6,7,8,9];
let num2 = [10,11,12,13,14,15,16,17,18,19,20]
let num3 = num1.concat(num2);
console.log(num3);

let compare = (a, b) => {
    return a - b;
}
let num4 = [21,32,12,43,3,65,87,778,23,11,2];
num4.sort(compare);
console.log(num4);

num4.reverse();
console.log("Reverse array num4 :", num4);

// splice and slice
let num5 = [12,23,34,45,56,67,78,89];
num5.splice(2, 3, 1111, 2222, 3333);
console.log(num5);

let num6 = [12,23,34,45,56,67,78,89];
num6.splice(2, 3, 1111, 2222, 3333, 4444, 5555);
console.log(num6);

let num7 = num6.slice(4);
console.log(num7);