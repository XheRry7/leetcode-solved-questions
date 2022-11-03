/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {   
    let arr1 = [];
    let arr2 = [];
    nums1.forEach(e=>{
          if(!nums2.includes(e)){
             arr1.push(e);
        }
    })
    nums2.forEach(e=>{
        if(!nums1.includes(e)){
             arr2.push(e);
        }
    })
    
    return  [[...new Set(arr1)] , [...new Set(arr2)]]
};