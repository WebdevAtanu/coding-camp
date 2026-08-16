/*
explanation: This code defines a function called twoSum that takes an array of integers (nums) and a target integer (target) as input. The function searches for two distinct numbers in the array that add up to the target value. It uses a nested loop to iterate through the array, checking each pair of numbers. If a pair is found that sums to the target and consists of different elements, the function returns their indices as an array. The example usage demonstrates finding the indices of the numbers 2 and 7 in the array [2, 7, 11, 15] that add up to 9, which returns [0, 1].
*/

const nums = [2, 7, 11, 15];
const target = 9;

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function twoSum(nums, target) {
    // Loop through the array and check if the sum of any two numbers equals the target
    for (let i = 0; i < nums.length; i++) {
        // Loop through the array again, starting from the next index to avoid using the same element twice
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of the two numbers equals the target and that they are not the same element
            if (nums[i] + nums[j] == target && nums[i] != nums[j]) {
                return [i, j]; // Return the indices of the two numbers
            }
        }
    }
}

console.log(twoSum(nums, target)); // [0, 1]