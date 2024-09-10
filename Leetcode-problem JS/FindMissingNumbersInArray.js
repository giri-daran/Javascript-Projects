//const array = [1, 3, 7, 9, 6, 8];

function Missing(array){
    // Sort the array in ascending order
    let array2 = array.sort((a, b) => a - b);
    console.log("Sorted array:", array2);

    let missingNumbers = [];

    // Loop through the sorted array to find missing numbers
    for (let i = 0; i < array2.length - 1; i++) {
        // Check if the next number in the sequence is not equal to the current number + 1
        if (array2[i + 1] !== array2[i] + 1) {
            console.log(`Checking for numbers between ${array2[i]} and ${array2[i + 1]}`);
            // Loop to find all missing numbers between array2[i] and array2[i+1]
            for (let j = array2[i] + 1; j < array2[i + 1]; j++) {
                missingNumbers.push(j); // Add missing numbers to the array
            }
        }
    }

    // Display the missing numbers
    if (missingNumbers.length > 0) {
        console.log("Missing numbers:", missingNumbers);
    } else {
        console.log("No missing numbers in the array");
    }
}


// input console.log(Missing([1, 3, 7, 9, 6, 8]));
//Sorted array: (6) [1, 3, 6, 7, 8, 9]
//Checking for numbers between 1 and 3
//Checking for numbers between 3 and 6
//Checking for numbers between 6 and 7
//Missing numbers: (3) [2, 4, 5]


//if input : console.log(Missing([9,6,4,2,3,5,7,0,1]));
// output - 8
