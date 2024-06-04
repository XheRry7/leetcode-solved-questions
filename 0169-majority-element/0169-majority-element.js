/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 let majorNum;
  let count = 0;

  for (const num of nums) {
    if (count == 0) {
      majorNum = num;
    }
    count += majorNum == num ? 1 : -1;
  }

  return majorNum;  
};