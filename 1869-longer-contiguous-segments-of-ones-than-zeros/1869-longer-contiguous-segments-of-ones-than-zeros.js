/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let ones = 0;
    let zeros = 0;
    let zerores = 0;
    let oneres = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) {
            zeros++;
        } else {
            zeros = 0;
        }
        if (s[i] == 1) {
            ones++;
        } else {
            ones = 0;
        }
        oneres = Math.max(oneres, ones);
        zerores = Math.max(zerores, zeros);
    }

    if (oneres > zerores) {
        return true;
    }
    return false;

};