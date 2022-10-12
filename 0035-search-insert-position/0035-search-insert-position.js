/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     nums.push(target);
    let y =  nums.sort((a,b)=>a-b);
   return y.indexOf(target)
};