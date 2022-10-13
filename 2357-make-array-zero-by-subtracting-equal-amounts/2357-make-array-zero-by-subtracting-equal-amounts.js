/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    if(nums.every((x) => x === 0)){
        return 0;
    }
    let count ;
    const min = (n, count)=>{
       count++;
        let x = n.sort((a,b)=>a-b);
        let y;
        let arr = []
       let z = x.filter(e=>e>0);
        y = z[0];
        n.map(e=>{
            if(e > 0){
                let a = e - y;
                if(a>0){
                    arr.push(e - y);
                }
            else{
                arr.push(0);
            }
            }
            else{
                arr.push(0);
            }
    
        })
        if(arr.every((x) => x === 0)){
            return count;
        }
       return  min(arr, count);
    }
    
    
   return min(nums, count=0);
    
    
    
};