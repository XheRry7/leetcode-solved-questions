/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let index = 0;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = index + 1; i < nums.length; i++) {
        rightSum += nums[i];
    }
    
    for (let index = 0; index < nums.length; index++) {
        if (leftSum == rightSum) return index;
        leftSum += nums[index];
        rightSum -= nums[index + 1];
    }

    return -1;

};