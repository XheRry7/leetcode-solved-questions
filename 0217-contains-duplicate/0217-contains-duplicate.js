/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
let arr = nums.sort();
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]== arr[i+1] || arr[i-1]==arr[i]){
            return true
        }
        
    }
    return false
    
};