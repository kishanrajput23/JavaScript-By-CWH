// program to print number from 0 to 10
for (let i=0; i<=10; i++) {
    console.log(i);
}

// program to print sum of first n natural numbers
let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
let sum = 0;
for (let i=0; i<=n; i++) {
    sum += i;
}
console.log("The sum of first n natural number is : ", sum);

// for in loop example
let obj = {
    kishan : 90,
    rohit : 89,
    mohit: 88,
    kritika: 87
}
for (let a in obj) {
    console.log("Marks of", a, "is", obj[a]);
}

// for of loop
for (let b of "Kishan") {
    console.log(b);
}