console.log(console);

console.error("Hey this is an error.");

console.assert(5>33);

console.assert(55>33);

obj = {a:1, b:2, c:3, d:4};
console.table(obj);

console.warn("Hey this is a warning");

console.time("a");
console.timeEnd("a");

console.time("forLoop");

for (let i=1; i<=5; i++) {
    console.log(i);
}

console.timeEnd("forLoop");