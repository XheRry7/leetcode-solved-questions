/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};
    
    for(let str of strs){
        let x = str.split("").sort().join("");
        if(!map[x]) map[x] = []
        map[x].push(str)
    }
    console.log(map)
    return Object.values(map)
};
    