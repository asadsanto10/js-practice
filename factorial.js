let factorialInput = 5;
let fact = 1;
for (let i = 1; i <= factorialInput; i++) {
    fact = fact * i;
    console.log(i, fact);
}
console.log(fact);

function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorial(6));



//=================== recursive factorial
function reFact(n){
    if(n==0){
        return 1;
    }
    else{
        return n * (n-1);
    }
}
console.log(reFact(10));