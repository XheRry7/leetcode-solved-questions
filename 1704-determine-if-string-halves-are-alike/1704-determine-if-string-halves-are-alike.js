/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a','e','i','o','u'];
    let count1 = 0;
    let count2 = 0;
    let str1 = s.slice('', s.length / 2);
    let str2 = s.slice(s.length / 2, s.length) 
    for(let i = 0; i < str1.length; i++){
        if(vowels.includes(str1[i].toLowerCase())){
            count1 += 1;
        }
    }
     for(let i = 0; i < str2.length; i++){
        if(vowels.includes(str2[i].toLowerCase())){
            count2 += 1;
        }
    }
    if(count1 == count2){
        return true
    }
    return false
};