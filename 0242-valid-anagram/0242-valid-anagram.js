/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false; 

    let map = new Map()
    for(let a of s){
        map.set(a, map.has(a)? 1+ map.get(a) : 1)
    }

    for(let b of t){
        if(!map.has(b)) return false

        map.set(b, map.get(b) - 1)

        if(map.get(b) === 0) map.delete(b)
    }

    return map.size === 0
};