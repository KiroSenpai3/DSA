/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let n = piles.length

    let dp = Array.from(
        { length: n + 1 },
        () => new Array(k + 1).fill(0)
    )

    for(let i = n - 1; i >= 0; i--) {

        let prefix = 0

        for(let x = 0; x <= Math.min(piles[i].length, k); x++) {

            if(x > 0) {
                prefix += piles[i][x - 1]
            }

            for(let j = x; j <= k; j++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    prefix + dp[i + 1][j - x]
                )
            }
        }
    }

    return dp[0][k]
};