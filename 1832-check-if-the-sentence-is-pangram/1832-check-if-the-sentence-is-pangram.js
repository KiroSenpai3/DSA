/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let total = "abcdefghijklmnopqrstuvwxyz"

    let set = new Set()
    for(let s of sentence){
        set.add(s)
    }

    for(let a of total){
        if(!set.has(a)) return false
    }

    return true
};