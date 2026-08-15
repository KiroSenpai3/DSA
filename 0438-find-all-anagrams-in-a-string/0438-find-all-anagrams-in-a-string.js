/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    if (p.length > s.length) return []

    let map = new Map()
    let window = new Map()
    let left = 0
    let ans = []

    for(let a of p){
        map.set(a, map.has(a)? map.get(a) + 1 : 1)
    }

    let mapCheck = function(az, bz){
        if(az.size !== bz.size) return false

        for(let [key, value] of az){
            if(bz.get(key) !== value) return false
        }
        return true
    }

    for(let i = 0; i < p.length; i++){
        window.set(s[i], window.has(s[i])? window.get(s[i]) + 1 : 1)
    }

    if(mapCheck(map , window)) ans.push(0)

    for(let right = p.length; right < s.length; right++){
        window.set(s[right], window.has(s[right])? window.get(s[right]) + 1 : 1)
        window.set(s[left], window.get(s[left]) - 1)
        if(window.get(s[left]) === 0) window.delete(s[left])
        left++
        if(mapCheck(map, window)) ans.push(left)
        
    }
    return ans

};