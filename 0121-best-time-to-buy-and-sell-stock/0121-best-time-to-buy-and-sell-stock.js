/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let max = 0

    for(let price of prices){
        min = Math.min(price, min)
        max = Math.max(max , price - min)
    }

    return max
};