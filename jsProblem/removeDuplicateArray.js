var number = [10, 45, 41, 78, 10, 60, 77, 45, 48, 10]
var uniqueNUmber = [];
for( var i = 0; i < number.length; i++){
    var element = number[i];
    var index = uniqueNUmber.indexOf(element);
    if(index == -1){
        uniqueNUmber.push(element);
    }
}
console.log(uniqueNUmber);