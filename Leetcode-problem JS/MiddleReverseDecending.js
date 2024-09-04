//input [1,2,3,4,5,6,7]

//output [7,6,5,1,2,3,4]


function MiddleReverseDecending(input, num){  // 3
    let size = input.length;
    if(size > num){
        num = num%size;
    }

    let rotate = input.splice(size - num, size);    // splice(startindex, totalcount, item1, ....., itemX)
    let sortRotate = rotate.sort().reverse();       // in this we add sort and reverse to display the spliced number in decending
     input.unshift(...sortRotate);                  // spread operator removes when there is array inside an array
     return input;
}

MiddleReverseDecending([1,2,3,4,5,6,7],3);

//output [7,6,5,1,2,3,4]
