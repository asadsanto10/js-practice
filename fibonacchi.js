//  sutro 
// fibo = [0, 1];
// fibo[n] = fibo[n - 1] + [n + 2];

function fibonacci(n) { 
    let fibo = [0 , 1];
    for(i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
 }
 console.log(fibonacci(10));

//  recursibe fibonacci

// function recursiveFibo(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     else{
//         let fibonacchi = recursiveFibo(n - 1) + recursiveFibo(n - 2)
//         return fibonacchi;
//     }
// }
// console.log(recursiveFibo(100));

// fibonacchi series