// chapter 6 question 1
let age = prompt("Enter your age");
age = Number.parseInt(age);
const canDrive = (age) => {
    return age>=18?true:false;
}
if (canDrive(age)) {
    alert("Congratulations, you're eligible for driving.");
}
else {
    alert("Sorry, you're not eligible for driving.")
}


// chapter 6 question 2
let runAgain = true;
while(runAgain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    const canDrive = (age) => {
        return age>=18?true:false;
    }
    
    if (canDrive(age)) {
        alert("Congratulations, you're eligible for driving.");
    }
    else {
        alert("Sorry, you're not eligible for driving.")
    }
    runAgain = confirm("Do you want to see prompt again?")   
}

// chapter 6 question 3
let againRun = true;
while(againRun) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if (age<0) {
        console.error("Please enter a valid age.");
        break;
    }

    const canDrive = (age) => {
        return age>=18?true:false;
    }
    
    if (canDrive(age)) {
        alert("Congratulations, you're eligible for driving.");
    }
    else {
        alert("Sorry, you're not eligible for driving.")
    }
    againRun = confirm("Do you want to see prompt again?")   
}
// chapter 6 question 4
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num>4) {
    location.href = "https://www.google.com";
}
// chapter 6 question 5
let color = prompt("Enter a background color of document");
document.body.style.background = color;