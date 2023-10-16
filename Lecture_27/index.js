alert("Enter the value of a!");
let a = prompt("Enter your value here");
a = Number.parseInt(a);
alert("You have entered a of type " + (typeof a));

let write = confirm("Do you want to print the value");
if (write) {
    console.log("the value of a is", a);
}
else {
    console.log("Please allow me to print the value");
}