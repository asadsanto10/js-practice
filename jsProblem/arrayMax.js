let marks = [40, 60, 89, 45, 70, 23, 90];
var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("max array value is", max);

let number = [45, 80, 70, 90];
let max = number[0];
for(var i = 0; i < number.length; i++){
    let element = number[i];
    max = element;
}
console.log(max);