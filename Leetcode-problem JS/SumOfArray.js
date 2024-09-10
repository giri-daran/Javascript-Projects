function SumOfArray(nums){
    let sums = 0;
    for(let i=0; i < nums.length; i++){
        sums = sums + nums[i];
    }
    return sums;
}

console.log(SumOfArray([1,2,3,4,5]));

// output : 15 (1+ 2+ 3+ 4+ 5)
