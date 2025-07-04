//3330. Find the Original Typed String I
//link --> https://leetcode.com/problems/find-the-original-typed-string-i/description/?envType=daily-question&envId=2025-07-01
/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
    if (word.length <= 1) return 1;

    let count = 1;

    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            count++;
        }
    }

    return count;
};
//----------------------------------------------------------------------------------------------------------------------------------//
// 1.Two Sum
//link --> https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for( let i =0;i<nums.length;i++){
      for (let j =i+1; j < nums.length; j++){
        if (nums[j]  + nums[i] === target){
            return [i,j];
        }
      }
   }
  return [];
};
//----------------------------------------------------------------------------------------------------------------------------------//
// 9. Palindrome Number
// link --> https://leetcode.com/problems/palindrome-number/submissions/1683132610/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    if (x < 0) {return false;} 
    let original = x;
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10); 
    }
    return original === reversed;
};