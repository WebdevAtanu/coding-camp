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