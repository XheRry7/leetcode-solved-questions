/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let candiesCopy = [...candies];
    let sortedArray = candiesCopy.sort((a,b)=> a-b);
    let greatestNum = sortedArray[candies.length - 1];
    
    let arr = [];
    for(let i = 0 ; i < candies.length; i++){
        if(candies[i] + extraCandies >= greatestNum){
            arr.push(true);
        }
        else{
            arr.push(false)
        }
    }
    return arr;
};