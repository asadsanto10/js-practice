var a = ['santo', 10, 15];
console.log(a);
a.push(110);
console.log(a);
a.pop();
console.log(a);

// shift
var a = ['santo', 10, 15];
console.log(a);
a.shift(110);
console.log(a);
a.unshift(55);
console.log(a);

// slice
var a = ['santo', 10, 15, 25, 54, 78];
var part = a.slice(2, 4);
console.log(part);

// splice
var a = ['santo', 10, 15, 25, 54, 78];
a.splice(2, 3, "santo10");
console.log(a);