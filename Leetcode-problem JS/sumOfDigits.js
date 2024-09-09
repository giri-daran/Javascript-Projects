function sumOfDigits(num){
    let sums = 0;

    while(num > 0){
        let num2 = num % 10;
        sums = (sums + num2);
        num = Math.floor(num/10);        //We use math.floor because this is to make the num as rounded value , without decimal
    }

    return sums;
}


console.log(sumOfDigits(1234));

//output = 10
