/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let length = Math.max(word1.length,word2.length); 
    let resultantString = '';
   
    for(let i =0; i < length; i++){
        resultantString += (word1[i] ?? '') + (word2[i] ?? '')
    }
    
    return resultantString;
    
};