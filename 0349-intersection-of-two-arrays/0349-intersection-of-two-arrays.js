/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    nums1.map(e=>{
        if(nums2.includes(e)){
            arr.push(e);
        }
    })
    return [...new Set(arr)];
};