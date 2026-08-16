/*
explanation: This code defines a function called stringReverse that reverses a given string without using the built-in reverse method. The function first converts the string into an array of characters, then iterates through the first half of the array, swapping each character with its corresponding character from the end of the array. After all swaps are completed, the array is joined back into a string and returned. The example usage demonstrates reversing the string "Hello, World!" which results in "!dlroW ,olleH".
*/

function stringReverse(str) {
    const stringArr = str.split(''); // Convert the string to an array of characters
    let i; // Initialize the loop variable
    for (i = 0; i < stringArr.length / 2; i++) { // Loop until the middle of the array
        const temp = stringArr[i]; // Store the current character in a temporary variable
        stringArr[i] = stringArr[stringArr.length - 1 - i]; // Replace the current character with the corresponding character from the end
        stringArr[stringArr.length - 1 - i] = temp; // Replace the corresponding character from the end with the temporary variable
    }
    return stringArr.join(''); // Join the array back into a string and return it
}

// Example usage:
const input = "Hello, World!";
const reversed = stringReverse(input);
console.log(reversed); // Output: "!dlroW ,olleH"