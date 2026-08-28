/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights)
    let right = weights.reduce((sum , elem) => {
        return sum += elem
    }, 0)
    let numDays = function (maxCap){
        let count = 1
        let sum = 0
        for(let i = 0; i < weights.length; i++){
            if(sum + weights[i] > maxCap){
                count++
                sum = 0
            }
            sum += weights[i]
        }
        return count
    }
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(numDays(mid) <= days){
            right = mid - 1
        }
        else if(numDays(mid) > days){
            left = mid + 1
        }
    }
    return left  
};