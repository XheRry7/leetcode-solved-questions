/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let array = JSON.parse(JSON.stringify(nums));
    let arr = array.sort((a, b) => b-a);
    let elem = [...new Set(arr)];
    let num;
    if (elem[2] != undefined || elem[2] != null) {
        num = elem[2];
        return num;
    }
    return elem[0];
    
};