function SumOfNatural(num){
    let sum = 0;
    for(let i=1 ; i <= num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(SumOfNatural(5));  

//input  = 5
//output = 15 (1 + 2 + 3 + 4 + 5)
