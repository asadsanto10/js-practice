var depth = 17;
var animal = 0;
if(depth <= 10){
    animal = depth * 50;
}
else if (depth <=20){
    var first10  = 10 * 50;
    var remaining = depth - 10;
    var senond20 = remaining * 100;
    animal = first10 + senond20;
}
else{
    var first10 = 10 * 50;
    var senond20 = 10 * 100;
    var remaining = depth - 20;
    var third30 = remaining * 300;
    animal = first10 + senond20 + third30;
}
console.log(animal);