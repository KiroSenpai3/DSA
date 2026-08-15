/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map()
    let window = new Map()

    for(let s of s1){
        map.set(s, map.has(s) ? map.get(s) + 1 : 1)
    }

    let checkMap = function(az , bz){
        if(az.size !== bz.size) return false
        for(let [key, value] of az){
            if(bz.get(key) !== value) return false
        }
        return true
    }


    for(let i = 0; i < s1.length; i++){
        window.set(s2[i], window.has(s2[i])? window.get(s2[i]) + 1 : 1)
    }
    if(checkMap(map, window)) return true

    let left = 0

    for(let right = s1.length; right < s2.length; right++){

        window.set(s2[right] , window.has(s2[right])? window.get(s2[right]) + 1 : 1)
        window.set(s2[left] , window.get(s2[left]) - 1)

        if(window.get(s2[left]) === 0) window.delete(s2[left])

        if(checkMap(map, window)) return true
        left++

    }
    return false
};