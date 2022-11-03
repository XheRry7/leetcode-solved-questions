/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let stone = stones.split('');
    let jewel = jewels.split('');
    stone.map(e=>{
        if(jewel.includes(e)){
            count = count + 1;
        }    
    })
    return count;
    
};