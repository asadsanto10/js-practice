function isPrime(n) { 
    for(var i = 2; i < n; i++){
        if (n % i == 0) {
            return n+' is a prime number';
        }
    }    
    return n+ " is not a prime number";
}
console.log(isPrime(127));
console.log(isPrime(100));