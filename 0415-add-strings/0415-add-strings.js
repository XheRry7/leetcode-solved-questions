/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) { 
    let x = num1.split('').reverse();
    let y = num2.split('').reverse();
    let z, s;
    let a = 0;
    let arr = [];
    for (let i = 0; i < x.length + 1 || i < y.length + 1; i++) {
        z = parseInt(a) + parseInt(x[i] || 0) + parseInt(y[i] || 0);
        if (z > 9) {
            s = z.toString().split('');
            a = s[0];
            arr.push(s[1]);
        } else {
            a=0;
            arr.push(z)
        }
    }
    let num = '';
    if(arr[arr.length-1]== 0 ){
        arr.pop();
    }
    arr.reverse().map(e => {
        num = num.concat(e.toString())
    });
    return num;
    
};