function fabbonaci(n){
    const fib = [0, 1];
    for(let i=2; i<n; i++){  //n=5  5
        //console.log(fib[i]);
        //console.log(fib[i-1]);
        //console.log(fib[i-2]);
        fib[i] = fib[i-1] + fib[i-2]; //fib[1] + fib[0] = 1  [0,1,1] ; fib[2] + fib[1] [0, 1,1,2] ; fib[3] + fib[2] [0,1,1,2,3]
        
    }
    return fib //[0,1,1,2,3]
}

console.log(fabbonaci(0));  //[0,1]
console.log(fabbonaci(3));  //[0,1,1]
console.log(fabbonaci(5));  //[0,1,1,2,3]
