// chapter 3 question 1
let marks = {
    kishan : 90,
    rohit : 89,
    nayan : 88,
    utpal : 87,
    mohit : 86
}

for (let i=0; i<Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

// chapter 3 question 2
for (let mark in marks) {
    console.log("The marks of " + mark + " is " + marks[mark]);
}

// chapter 3 question 3
let correct_number = 10;
let i;
while (i != correct_number) {
    console.log("Try Again!!");
    i = prompt("Enter a number");
}
console.log("You have entered correct number");

// chapter 3 question 4
const mean = (a, b, c, d) => {
    return (a+b+c+d)/4;
}
console.log("Mean :", mean(10, 20, 30, 40));