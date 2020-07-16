var number = [54, 45, 12, 60, 45];
var sum = 0;
for (var i = 0; i < number.length; i++) {
    var element = number[i];
    sum = sum + element;
}
console.log("total of the numbers: ", sum);

function getArraySum(number) {
    var sum = 0;
    for(i =0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum
}
let aarrayNumber = getArraySum([54, 45, 12, 60, 45, 78, 50]);
console.log("total array number ", aarrayNumber);