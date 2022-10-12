/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let looplimit = 500
    let q = 0;
    let y;
    y = n;
    
    while (y > 0 && q < looplimit) {
        if (y == 1) {
            return true;
        }
        let arr = y.toString().split('');
        let arr2 = [];

        arr.map(e => {
            arr2.push(e * e);
        })

        let z = 0;

        for (let i = 0; i < arr2.length; i++) {
            z = z + arr2[i];
        }
        y = z;
        q++;
    }
    return false
};