let id1 = document.getElementById("id1");
console.log(id1);

// matches in js
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

// closest in js
console.log(sp1.closest("#sp1"));

// contains in js
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));