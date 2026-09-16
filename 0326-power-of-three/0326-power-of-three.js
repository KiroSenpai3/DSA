/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let recur = function(n){
        if(n === 1) return true
        if(n < 1 || n%3 !== 0) return false
        return recur(n/3)
    }
    return recur(n)
};