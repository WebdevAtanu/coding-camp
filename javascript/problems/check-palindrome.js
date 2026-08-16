/*
explanation: This code defines a function called isPalindrome that checks if a given number is a palindrome. A palindrome is a number that reads the same backward as forward, such as 121 or 12321. The function first converts the number to a string, then reverses the string and compares it to the original string representation of the number. If they are equal, the function returns true, indicating that the number is a palindrome; otherwise, it returns false. The example usage demonstrates checking if the number 121 is a palindrome, which returns true.
*/

var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    if (reversed === x.toString()) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121)); // true