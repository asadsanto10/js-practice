var statement = "hello world";
var reverse = "";

for(var i = 0; i < statement.length; i++){
    var char = statement[i];
    //console.log(statement[i]);
    reverse = char + reverse;
    //console.log(reverse);
}
console.log(reverse);