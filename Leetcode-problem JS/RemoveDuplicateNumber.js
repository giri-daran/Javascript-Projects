
//with js functions
function RemoveDuplicateNumber(num){
    for(let i=0; i < num.length-1 ;i++){
        if(num[i] === num[i+1]){
            num.splice(i+1, 1);
            i--;
        }
    }
    return num;
}

RemoveDuplicateNumber([0, 1, 1, 2, 2, 2, 3, 3, 4]);

// [0,1,2,3,4]

//without js functions
function RemoveDuplicateNumber(num) {
    if (num.length === 0) return [];

    let uniqueNums = [];
    
    for (let i = 0; i < num.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueNums.length; j++) {
            if (num[i] === uniqueNums[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueNums[uniqueNums.length] = num[i];
        }
    }

    return uniqueNums;
}

RemoveDuplicateNumber([0, 1, 1, 2, 2, 2, 3, 3, 4]);

// [0,1,2,3,4]
