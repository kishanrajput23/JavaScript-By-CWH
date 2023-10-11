console.log("Lecture 05");

//chapter 1 : question 1
let a = "kishan";
let b = 5;
console.log(a+b);

//chapter 1 :  question 2
console.log(typeof (a+b));

//chapter 1 :  question 3
const c = {
    name : "kishan",
    section : "A",
}

// c = 34;    --> this will throw an error as we can't change the const value

//chapter 1 :  question 4
c["friend"] = "Rohit";
c["name"] = "Kishna"
console.log(c);   // yes, we can add new key value pair in const object

//chapter 1 :  question 5
const dict = {
    Abundance : "Plenty",
    Accentuate : "Emphasize",
    Acquiesce : "Consent",
    Align : "Position",
    Ambigue : "Ambigous"
}
console.log(dict);