/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let remvedSpaces = s.replace(/\s+/g, ' ').trim()
    let val = remvedSpaces.split(' ');
    
    let lastString = val[val.length-1];
    
    return lastString.split('').length;
};