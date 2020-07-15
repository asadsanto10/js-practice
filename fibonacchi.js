// ------------- sutro 
// fibo = [0, 1];
// fibo[n] = fibo[n - 1] + [n + 2];

function fibonacci(n) { 
    let fibo = [0 , 1];
    for(i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
 }
 console.log(fibonacci(5));



//  ================recursibe fibonacci

function recursiveFibo(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        let fibonacchi = recursiveFibo(n - 1) + recursiveFibo(n - 2)
        return fibonacchi;
    }
}
console.log(recursiveFibo(10));



// ============fibonacchi series

function fibonacchi(n) {
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0, 1];
    }
    else{
        var fibo = fibonacchi(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo; 
    }
}
console.log(fibonacchi(5));








var fibo = [0, 1];
for(var i = 2; i<=10; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo);
