function brickCalculator(storey) {
    var bricksPerFit = 1000;
    if (storey < 0) {
        return 0;
    }
    if (storey <= 10) {
        return bricksPerFit * 15 * storey;
    } else if (storey > 10 && storey <= 20) {
        return bricksPerFit * (15 * 10 + (storey - 10) * 12);
    } else {
        return bricksPerFit * (10 * 15 + 10 * 12 + (storey - 20) * 10);
    }
}
console.log(brickCalculator(0));