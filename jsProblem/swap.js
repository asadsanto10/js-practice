let a = 7;
let b = 10;
console.log("before swap a="+ a, " b ="+ b);
temp = a;
a = b;
b = temp;
console.log("after swap a=" + a, " b =" + b);


let x= 15;
let y= 25;
x = x+y;
y = x-y;
x = x-y;
console.log("after swap x = ", x, " y=",y);


let p = 7;
let q = 46;
[p, q] = [q, p];
console.log("after swap p = ", p, " q=",q);