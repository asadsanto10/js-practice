var promise = "asaduzzaman santo";
console.log(promise.indexOf('santo'));

var userName = "borsha rani";
console.log(userName.toUpperCase());

var splittt = "asaduzzmaan santo";
splittt = splittt.split(' ');
    console.log(splittt);
    console.log(Array(splittt));
    console.log(splittt[1]);

var number1 = 10;
var number2 = "15.5";
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 10;
var number2 = "20";
number2 = parseInt(number2);
console.log(number1 + number2);

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
console.log((num1 + num2).toFixed(2));

// absolute number
var number = -15;
var absolute = 'absolute number ' + Math.abs(number);
console.log(absolute);

// round number
var number = 20.52;
var round = 'round number '+Math.round(number);
console.log(round);

// ceil number
var number = 22.99999;
var ceil = 'ceil number '+Math.ceil(number);
console.log(ceil);

// floor number
var number = 22.99999;
var floor = 'floor number ' + Math.floor(number);
console.log(floor);

// random number ek ek bar ek ek time change hobe
var number = 22.99999;
var random = 'random number ' + Math.random(number);
console.log(random);

var dateee = new Date();
console.log(dateee);