function SumOfArray(nums){
    let sums = 0;
    for(let i=0; i < nums.length; i++){
        sums = sums + nums[i];
    }
    return sums;
}

console.log(SumOfArray([1,2,3,4,5]));

// output : 15 (1+ 2+ 3+ 4+ 5)

//===============================================================

function SumOfMatrix(nums){
    let sums = 0;
    for(let i=0; i < nums.length; i++){
        for(let j=0; j < nums.length ; j++{
            sums = sums + nums[i][j];
        }
    }
    return sums;
}

// input  console.log(SumOfMatrix([[1,2,3,4,5],[2,3,4,5,6]]));

//output  8
