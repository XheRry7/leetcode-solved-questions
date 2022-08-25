/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let input = s.split('');
    let arr = [];
    let ans = 0;
    
    for(let i=0;i < input.length;i++){
        if(input[i] === 'I' && input[i+1] === 'V' ){
            let number = 'IV';
            input.splice(i,2, number);
        }
          if(input[i] === 'I' && input[i+1] === 'X' ){
            let number = 'IX';
            input.splice(i,2, number);
        }
          if(input[i] === 'X' && input[i+1] === 'L' ){
            let number = 'XL';
            input.splice(i,2, number);
        }
          if(input[i] === 'X' && input[i+1] === 'C' ){
            let number = 'XC';
            input.splice(i,2, number);
        }
          if(input[i] === 'C' && input[i+1] === 'D' ){
            let number = 'CD';
            input.splice(i,2, number);
        }
          if(input[i] === 'C' && input[i+1] === 'M' ){
            let number = 'CM';
            input.splice(i,2, number);
        }
    }
    input.map(e=>{
        if(e)
        switch (e){
            case 'I':
                arr.push(1);
                return;
            case 'IV':
                arr.push(4);
                return;    
            case 'V' :
                arr.push(5);
                return;
             case 'IX':
                arr.push(9);
                return;    
            case 'X':
                arr.push(10);
                return;
            case 'XL':
                arr.push(40);
                return;
            case 'L':
                arr.push(50);
                return;
            case 'XC':
                arr.push(90);
                return;    
            case 'C':
                arr.push(100);
                return;
            case 'CD':
                arr.push(400);
                return;
            case 'D': 
                arr.push(500);
                return;
            case 'CM':
                arr.push(900);
                return;    
            case 'M': 
                arr.push(1000);
                return;
            default:
                return;
        }
    })
    arr.map(e=>{
        ans = ans + e;
    })
    return ans;
    
};