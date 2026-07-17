/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let a = new Map()
    let b = "abcdefghijklmnopqrstuvwxyz"
    let c = 0
    for (let w of key){
        if(a.has(w)) continue
        if(w == " ") continue
        else{a.set(w, b[c])}
        c++
    }
    let d = ""
    for(let value of message){
        if(value == " ") d += value
        else{
            d += a.get(value)
        }
    }
    return d
};