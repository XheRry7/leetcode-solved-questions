/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x>0){
        let y = x.toString().split('').reverse();
        let z = y.toString().replaceAll(',', '');
        if (z > 0x7FFFFFFF) {
        return 0;
            }
        return z;
    }
    else if( x < 0){
        let y = x.toString().split('').reverse();
        let i = y.pop();
        let z = -y.toString().replaceAll(',', '');
        if (z < -0x7FFFFFFF) {
        return 0;
            }
        return z;
    }
    else{
        return 0;
    }
};
