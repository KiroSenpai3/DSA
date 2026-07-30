/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = new Array(grid.length)

    for(let i = 0; i < grid.length; i++){
        dp[i] = new Array(grid[0].length).fill(Infinity)
    }

    dp[0][0] = grid[0][0]

    for(let i = 0; i < dp.length; i++){
        for(let j = 0; j < dp[0].length; j++){
            if(i == 0 && j == 0) continue

            if(i == 0){
                dp[i][j] = grid[i][j] + dp[i][j-1]
                continue
            }

            if(j == 0){
                dp[i][j] = grid[i][j] + dp[i-1][j]
                continue
            }

            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
};