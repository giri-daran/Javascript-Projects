// Approach 1

function SumOfNaturalNumbers(num){
    let sum = 0;
    for(let i=1 ; i <= num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(SumOfNaturalNumbers(5));  

//input  = 5
//output = 15 (1 + 2 + 3 + 4 + 5)

// Approach 2

function SumOfNaturalNumbers(num){
    
    return num * (num+1) / 2;
}

console.log(SumOfNaturalNumbers(5));  

//input  = 5
//output = 15 (1 + 2 + 3 + 4 + 5)

console.log(SumOfNaturalNumbers(10));  

//input  = 10
//output = 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
