/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let n = prices.length
    let stack = []
    let ans = [...prices]

    for(let i = 0; i < n; i++){
        while(stack.length && prices[i] <= prices[stack[stack.length - 1]]){
            let a = stack.pop()
            ans[a] = prices[a] - prices[i]
        }

        stack.push(i)
    }

    return ans
};