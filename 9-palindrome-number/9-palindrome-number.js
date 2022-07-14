/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let z = x.toString().split('').reverse();
    let y = z.toString().replaceAll(',', '');
    if( x==y){
        return true;
    }
    return false;

};



