// Conditional Statements
let a = prompt("Hey what's your age : ");
a = Number.parseInt(a);     // converting string to a number
console.log(typeof a);

if (a<0) {
    alert("This is an invalid age");
}
else if (a<9) {
    alert("You are a kid and you cannot even think of driving.");
}
else if (a>=9 && a<18) {
    alert("You are a kid and you can think of driving after 18.");
}
else {
    alert("You can now drive as you're above 18.");
}

console.log("Done");

// Switch Case Statements

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// Ternary Operator
console.log("You can", (a<18? "not drive":"drive"));