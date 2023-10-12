let a = [1,2,3,4,5,6, null, false, "not"];
console.log(a);
console.log("The length of array a is",a.length);

let fruit = ["apple", "banana", "grapes"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);  //this will print undefined as, on index 3 no value is present.

fruit[3] = "mango";
console.log(fruit[3]);  // now this will not give undefined as output because we have already given value at index 3.
console.log(typeof fruit);