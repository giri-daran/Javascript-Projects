//input [1,2,3,4,5,6,7]

//output [5,6,7,1,2,3,4]

function MiddleReverseAccending(input,k){
    let size = input.length;                    // get the length of the array
    if(size > k){                               // check condition whethere the array length is higher than given num
        k=k % size;                             // get reminder as the value of k
    }

    const rotate = input.splice(size - k , k);  // we put splice so that it removes from (starting , till the end of array)
    input.unshift(...rotate);                   // now unshift to insert the value in the begining of the array
    return input;
}

MiddleReverseAccending([1,2,3,4,5,6,7], 3);

// output [5, 6, 7, 1, 2, 3, 4]
