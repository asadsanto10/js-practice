a= 1;
while (a<=15) {
    a++;
    console.log(a);
}
console.log('\n')
for(a= 0; a<=10; a++){
    console.log(a);
}
console.log('\n');

var num = ['10, 15, 19, 34, 56, 45'];
var length = num.length;
for(i = 0; i < length; i++){
    var element = num[i];
    console.log(element);
}

console.log('\n');

// switch

var num = 500;
switch(num){
    case 500:
        console.log("number is 500");
        break;
    case 400:
        console.log("number is 400")
        break;
    default:
        console.log("no value find");
}
console.log('\n'); 
console.log('\n');
var foo = 0;
var output = 'Output: ';
switch (foo) {
    case 0:
        output += 'So ';
    case 1:
        output += 'What ';
        output += 'Is ';
    case 2:
        output += 'Your ';
    case 3:
        output += 'Name';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 5!');
}