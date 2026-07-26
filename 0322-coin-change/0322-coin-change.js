/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Map()
    let solve = function(amount){
        if(amount === 0) return 0
        if(amount < 0) return Infinity

        if(memo.has(amount)) return memo.get(amount)

        let answer = Infinity

        for(let coin of coins){
            answer = Math.min(1 + solve(amount - coin), answer)
        }

        memo.set(amount, answer)

        return answer
    }
    let ans = solve(amount)
    return ans === Infinity? -1 : ans

};