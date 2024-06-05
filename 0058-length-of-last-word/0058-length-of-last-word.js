/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let y = s.trim().split(' ');
    const elem = y[y.length - 1].length;
    return elem;
};