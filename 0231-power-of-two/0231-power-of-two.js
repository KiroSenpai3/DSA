/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let recur = function(n){
        if(n === 1) return true
        if(n%2 !== 0 || n === 0) return false
        return recur(n/2)
    }
    return recur(n)
};