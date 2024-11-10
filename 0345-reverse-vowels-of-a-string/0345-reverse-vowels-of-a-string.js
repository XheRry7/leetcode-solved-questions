/**
 * @param {string} s
 * @return {string}
 */


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

var reverseVowels = function(s) {
    let vowels = ['a', 'e' , 'i' , 'o' , 'u'];
    let left = 0;
    let right = s.length - 1;
    
    while(left <= right){
        
        if(!vowels.includes(s[left].toLowerCase())){
            left++;
           }
    else if(!vowels.includes(s[right].toLowerCase())){
            right--;
        }

    else{
        temp = s[left];
        s = setCharAt(s,left,s[right]);
        s = setCharAt(s,right, temp);
        left++;
        right--;
    }
   
    
    
}
     return s;
}