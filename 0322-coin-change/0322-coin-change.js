/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {

        let answer = Infinity

        for (let coin of coins) {
            if (i - coin >= 0) {
                answer = Math.min(1 + dp[i - coin], answer)
            }
        }

        dp[i] = answer
    }
    return dp[amount] === Infinity? -1 : dp[amount]

};