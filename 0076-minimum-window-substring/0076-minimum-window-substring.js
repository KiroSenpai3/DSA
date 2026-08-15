/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    if(t.length > s.length) return ""

    let map = new Map()
    let window = new Map()
    let left = 0
    let ans = []

    for(let a of t){
        map.set(a, map.has(a)? map.get(a) + 1 : 1)
    }

    let mapChecker = function(az , bz){
        for(let [key , value] of az){
            if((bz.get(key) || 0) < value) return false
        }

        return true
    }

    for(let right = 0; right < s.length; right++){
        window.set(s[right], window.has(s[right])? window.get(s[right]) + 1 : 1)

        let valid = false

        while(mapChecker(map,window)){
            valid = true
            
            window.set(s[left], window.get(s[left]) - 1)
            if(window.get(s[left]) === 0) window.delete(s[left])
            left++
        }

        if(valid) ans.push(s.slice(left-1, right + 1))
    }

    if(!ans.length) return ""

    return ans.reduce((shortest, current) => {
        return shortest.length > current.length ? current : shortest
    })

};