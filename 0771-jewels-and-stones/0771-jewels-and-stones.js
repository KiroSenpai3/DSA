/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let set = new Set()

    for(let jewel of jewels){
        set.add(jewel)
    }

    for(let stone of stones){
        if(set.has(stone)) count++
    }
    return count

};