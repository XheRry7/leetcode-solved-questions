/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   const number = nums.sort((a, b) => a - b)  
      
    for (let i = 0; i < number.length; i++) {
        if (number[i] == number[i - 1] || number[i] == number[i + 1]) {
            continue;
        } else {
            return number[i];
        }
    }
};