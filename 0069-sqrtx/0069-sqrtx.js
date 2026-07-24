/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        if(middle*middle == x) return middle
        if(middle*middle < x) left = middle + 1
        else right = middle - 1
    }
    return right
};