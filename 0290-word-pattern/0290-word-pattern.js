/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let a = new Map()
    let st = s.split(" ")
    if(pattern.length !== st.length) return false
    for(let i = 0; i < pattern.length; i++){
        if(a.has(pattern[i]) && a.get(pattern[i]) != st[i]) return false
        else{
            a.set(pattern[i], st[i])
        }
    }
    let b = new Map()
    for(let i = 0; i < pattern.length; i++){
        if(b.has(st[i]) && b.get(st[i]) != pattern[i]) return false
        else{
            b.set(st[i], pattern[i])
        }
    }
    return true
};