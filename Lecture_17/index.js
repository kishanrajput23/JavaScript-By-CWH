// Arrays Methods
let num1 = [1,2,3,4,5,6];
console.log("num1:", num1);
console.log("Type of num1:",typeof num1);

let num2 = num1.toString();
console.log("num2:", num2);
console.log("Type of num2:",typeof num2);

let num3 = num1.join("_");
console.log(num3);

console.log("Before pop num1 :", num1);
let p = num1.pop();     // pop return the popped element
console.log("The popped element from num1 is :", p);
console.log("After pop num1 :", num1);

console.log("Before push num1 :", num1);
console.log("Before push, length of num1 : ", num1.length);
let pu = num1.push(99);     // push added the new element into the array
console.log("After push num1 :", num1);
console.log("After push, length of num1 : ", num1.length);

let s1 = num1.shift()        // removes an element from the start of the array and modify the same array
console.log(s1, num1);

let s2 = num1.unshift(101)        // adds an element to the start of the array and modify the same array
console.log(s2, num1);
