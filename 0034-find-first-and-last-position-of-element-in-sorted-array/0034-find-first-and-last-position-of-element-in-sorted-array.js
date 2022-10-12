/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.includes(target)){
          console.log(nums.indexOf(target) ,nums.lastIndexOf(target));
        return [nums.indexOf(target) ,nums.lastIndexOf(target)]
    }
    return [-1,-1]
};