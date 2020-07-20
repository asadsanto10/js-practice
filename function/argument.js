function addNumber(a, b) {
    //console.log(arguments[4]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        //console.log(num);
        sum = sum + num;
    }
    return sum;
}
var result  = addNumber(1, 4, 2, 8, 7, 45);
console.log(result);