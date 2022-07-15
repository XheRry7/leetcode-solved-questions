/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if(s.length= 0){
        return true;
    }
    else{
        let value =  s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let reverse = value.split('').reverse();
        let reverseValue = reverse.toString().replaceAll(',','');
        if(value == reverseValue){
            return true;
        }
        else{
            return false;
        }
            
    }

};