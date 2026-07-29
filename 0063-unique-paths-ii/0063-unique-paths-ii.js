/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    if(obstacleGrid.length == 1 && obstacleGrid[0].length == 1){
        if(obstacleGrid[0][0] == 0) return 1
        else return 0
    }

    let dp = new Array(obstacleGrid.length)

    for(let i = 0; i < obstacleGrid.length; i++){
        dp[i] = new Array(obstacleGrid[0].length).fill(0)
    }

    for(let i = 0; i < dp.length; i++){
        for(let j = 0; j < dp[0].length; j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0
                continue
            }

            if(i == 0 && j == 0){
                dp[i][j] = 1
                continue
            }

            if(i == 0){
                if(obstacleGrid[i][j-1] == 1) dp[i][j] = 0
                else{
                    dp[i][j] = dp[i][j-1]
                    }
                continue
            }

            if(j == 0){
                if(obstacleGrid[i-1][j] == 1) dp[i][j] = 0
                else{
                    dp[i][j] = dp[i-1][j]
                    }
                continue
            }
            
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

        }
    }
    return dp[dp.length - 1][dp[0].length - 1]    
};