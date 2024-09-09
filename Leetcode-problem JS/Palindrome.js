function Palindrome(num){
    let dup = num;
    let sium = 0;
    while(num > 0){
        let num2 = num % 10;
        sium = (sium * 10) + num2;
        num = Math.floor(num / 10);       // we use math.floor because this is to make the num as rounded value , without decimal
    }
  
    //return (dup == sium) ? `The ${num} is a palinfdrome`  : `The ${num} is not a palinfdrome`;
    return dup === sium;   
}

console.log(Palindrome(1245));  //false
console.log(Palindrome(131));   //true
