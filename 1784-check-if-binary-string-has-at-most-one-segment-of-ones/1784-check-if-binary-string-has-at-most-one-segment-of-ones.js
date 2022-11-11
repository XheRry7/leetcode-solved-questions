/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {

//     if(s.length <= 2 && s.includes(1)){
//         return true;
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == 1 && s[i + 1] == 1) {
//             return true;
//         }
//     }

    return !s.includes('01');

};