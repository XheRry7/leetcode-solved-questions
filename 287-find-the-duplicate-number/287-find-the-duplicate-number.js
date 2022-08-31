/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const number = nums.sort();
    

    for(let i =0; i< number.length;i++){
        if(number[i] === number[i+1] || number[i-1] === number[i]){
     console.log(number[i]);
            return number[i]
        }
        continue;
    }
    
};