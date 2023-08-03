/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 0;
    for(let j =1; j < nums.length; j++){
        // replacing the original array and checking for duplicates
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1;
};