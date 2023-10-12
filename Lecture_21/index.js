// chapter 5 question 1
let arr = [1,2,3,4,5,6];
let p = prompt("Enter a number");
p = Number.parseInt(p);
arr.push(p);
console.log(arr);

// chapter 5 question 2
let arr1 = [1,2,3];
let num;
while (num != 0) {
    num = prompt("Enter a number");
    num = Number.parseInt(num);
    arr1.push(num);
}
console.log(arr1);

// chapter 5 question 3
let arr2 = [5,10,15,20,25,30,35,40,45,50];
let result2 = arr2.filter((value) => {
    return (value%10==0)
})
console.log(result2);

// chapter 5 question 4
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let result3 = arr3.map((value) => {
    return value*value;
})
console.log(result3);

// chapter 5 question 5
let arr4 = [1,2,3,4,5];
let result4 = arr4.reduce((value1, value2) => {
    return value1*value2;
})
console.log(result4);