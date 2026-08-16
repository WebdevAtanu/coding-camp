/*
explanation: This code implements the Quick Sort algorithm, which is a divide-and-conquer sorting algorithm. The function quickSort takes an array as input and sorts it in ascending order. It selects a pivot element (the first element of the array) and partitions the remaining elements into two sub-arrays: one containing elements less than the pivot and the other containing elements greater than or equal to the pivot. The function then recursively sorts the left and right sub-arrays and combines them with the pivot to produce the final sorted array. The base case for the recursion is when the array has 0 or 1 element, in which case it is already sorted.
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr; // base case: arrays with 0 or 1 element are already sorted

    let pivot = arr[0]; // pivot is the first element of the array
    let left = []; // array to store elements less than the pivot
    let right = []; // array to store elements greater than the pivot

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // add to left array if element is less than pivot
        } else {
            right.push(arr[i]); // add to right array if element is greater than or equal to pivot
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // return the sorted array
}
// Example usage:
let arr = [3, 6, 8, 10, 4, 2, 1];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 6, 8, 10]