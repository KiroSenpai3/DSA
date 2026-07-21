/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map()
    for(let a of arr){
        if (map.has(a)){
            map.set(a, map.get(a) + 1)
        }
        else{map.set(a, 1)}
    }
    let ar = []
    for([key, value] of map){
        if(value == 1){
            ar.push(key)
        }
    }
    return ar.length >= k? ar[k-1] : ""
};