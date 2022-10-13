/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//       let m = new Map();
//     let x = nums.sort((a,b)=>a-b).filter(e=>e>0);
//     for(let i=1;i<2147483648;i++){
//         if(!x.includes(i)){
//             return i;
//         }
//     }  
//     return '';
// };



var firstMissingPositive = function(nums) {    
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) return i;
    }
    return nums.length + 1; // the array is [1,2,...,n]
}
