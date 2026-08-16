/*
explanation: This code defines a function called permutation that generates all possible permutations of a given string. It uses a recursive approach to build the permutations by selecting each character one at a time and generating permutations of the remaining characters. The function initializes an empty array to store the results and returns it once all permutations are generated.
*/

function permutation(str){
    let result = [] // Initialize an empty array to store the permutations
    if(str.length === 1){
        return [str] // If the string has only one character, return an array containing that character
    }
    for(let i = 0; i < str.length; i++){
        let char = str[i] // Get the current character
        let remainingChars = str.slice(0, i) + str.slice(i + 1) // Get the remaining characters by excluding the current character and concatenating the remaining characters
        let permutations = permutation(remainingChars) // Recursively call the permutation function on the remaining characters to get all permutations of the remaining characters
        for(let j = 0; j < permutations.length; j++){
            result.push(char + permutations[j]) // Concatenate the current character with each permutation of the remaining characters and add it to the result array
        }
        }
    return result // Return the final array of permutations
}

console.log(permutation('abc')) // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']