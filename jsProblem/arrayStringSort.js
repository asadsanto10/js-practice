function longestName(arr) {
    var count = [];
    for (var i = 0; i < arr.length; i++) {
        count.push(arr[i].length);
    }
    var max = Math.min(...count); // ... spread
    console.log(max);
    var index = count.indexOf(max);
    return arr[index];
};
var arryss = longestName(["Australia", "Germany", "United States of America", "sa"]);
console.log(arryss);