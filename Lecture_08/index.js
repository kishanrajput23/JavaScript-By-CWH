console.log("Lecture 08");

//chapter 2 : question 1
let age = prompt("What's your age : ");
if (age>10 && age<20) {
    console.log("Your age lies between 10 and 20.");
}
else {
    console.log("Your age does not lies between 10 and 20.");
}

//chapter 2 : question 2
let i = 9;
 
switch (i) {
    case 0:
        console.log("i is zero.");
        break;
    case 1:
        console.log("i is one.");
        break;
    case 2:
        console.log("i is two.");
        break;
    default:
        console.log("i is greater than 2.");
}

//chapter 2 : question 3
let number = prompt("Enter a number : ");
number = Number.parseInt(number);
if (number%2==0 && number%3==0) {
    console.log("Given number is divisible by both 2 and 3.");
}
else {
    console.log("Given number is not divisible by 2 and 3.");
}

//chapter 2 : question 4
let num = prompt("Enter a number : ");
num = Number.parseInt(num);
if (num%2==0 || num%3==0) {
    console.log("Given number is divisible by either 2 or 3.");
}
else {
    console.log("Given number is not divisible by 2 and 3.");
}

//chapter 2 : question 5
let a = prompt("What's your age : ");
console.log("You can", (a<18? "not drive":"drive"));