/*
explanation: This code reverses an array without using the built-in reverse method. It initializes a new empty array and then iterates through the original array, assigning elements to the new array in reverse order. The final reversed array is then logged to the console.
*/

var arr = [1, 2, 3, 4]; // reverse the array without using reverse method
var newArr = []; // create a new array to store the reversed elements

for (let i = 0; i < arr.length; i++) { // loop through the original array
    newArr[i] = arr[arr.length - 1 - i]; // assign the elements in reverse order to the new array
}
console.log(newArr); // Output: [4, 3, 2, 1]