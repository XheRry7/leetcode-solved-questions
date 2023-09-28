/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = '';
    let first = strs[0];
    let strToCheck = '';
    for(let i = 0; i < first.length;i++){
        strToCheck = strToCheck + first[i];
        if(!(strs.every(e=> e.startsWith(strToCheck)))){
            return  strToCheck.slice(0, strToCheck.length - 1);
        }
    }
    return strToCheck;
    
};