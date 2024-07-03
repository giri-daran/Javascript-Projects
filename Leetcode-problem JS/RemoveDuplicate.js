const array = ['a', 'a', 'c', 'c', 'd', 'b', 'd'];

function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: ['a', 'c', 'd', 'b']
