// let marks = [40, 60, 89, 45, 70, 23, 90];
// var max = marks[0];

// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log("max array value is", max);

// let number = [45, 80, 70, 90];
// let max = number[0];
// for(var i = 0; i < number.length; i++){
//     let element = number[i];
//     max = element;
// }
// console.log(max);

// function maxNumber(data){
//     var max = data[0];
//     for(var i = 0; i < data.length; i++){
//         var element = data[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// var number = maxNumber([40, 60, 89, 45, 70, 23, 80, 150]);
// console.log(number);

function maxNumber(maxValue){
    var count = maxValue[0];
    for (var i = 0; i < maxValue.length; i++){
        var container = maxValue[i];
        if (container > count) {
            count = container;
        }
    }
    return count;
}
var max = maxNumber([40, 60, 89, 45, 70, 23, 80, 150, 550]);
console.log('max number is ' +max);