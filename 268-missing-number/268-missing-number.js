/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   
     if(nums.length == 1 && nums[0] == 0){
        return 1;
    }
    const number = nums.sort(function (a, b) {
  return a - b;
});
    for(let i=0; i<number.length;i++)
        {
            if (number[i-1] != number[i]-1){
                if(number[i]-1 >= 0){
                return number[i]-1;
                }
                continue;
            }
            else if(number[i+1] != number[i]+1 ){
                return number[i]+1;
            }
            else{
                continue;
            }
        }
    
};