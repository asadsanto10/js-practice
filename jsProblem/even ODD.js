var number = [12, 5, 45, 78, 4, 56, 3 ,79, 63];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 == 0) {
        console.log(element, ": is a even number");
    }
    else{
        console.log(element, ": is a odd number");
    }
}

console.log(25%5);