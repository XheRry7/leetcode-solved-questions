/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {  
    let arr = s.split(' ');
    return arr.reverse().join(' ').trim().replace(/\s+/g, ' ');
};