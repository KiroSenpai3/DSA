/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let remain = []
    for(let i = 0; i < rocks.length; i++){
        remain[i] = capacity[i] - rocks[i]
    }
    remain.sort((a,b) => a-b)
    let count = 0
    for(let i = 0; i < remain.length; i++){
        if(additionalRocks >= remain[i]){
            count++
            additionalRocks -= remain[i]
        }
        else return count
    }
    return count
};