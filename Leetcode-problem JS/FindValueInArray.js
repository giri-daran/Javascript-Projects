//const arr = [1,2,3,4, "hello" , {name : "giri", age : 28}, [4,5,6,7] ]


function FindValueInArray(arr, target){
    for(let x of arr){
        if(x === target){
            return true;
        }
    }
    return false;
}

console.log(FindValueInArray([1,2,3,4, "hello" , {name : "giri", age : 28}, [4,5,6,7] ], "hello"));  // true

console.log(FindValueInArray([1,2,3,4, "hello" , {name : "giri", age : 28}, [4,5,6,7] ], "heo"));  // false
