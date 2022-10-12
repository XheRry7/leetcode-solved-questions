/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    const recursion =(num)=>{    
    let q;
    q= num
    let arr = [];
    let s=0;
    arr = q.toString().split('');
    
   
        if(arr.length == 1){
            console.log(':::',arr[0])
        return arr[0];
    }
    
    else{
        for(let i =0 ; i< arr.length; i++){
           s = s + parseInt(arr[i]);
        }
        return recursion(s)
        
    }  
        
    }
    
return recursion(num)
    
};