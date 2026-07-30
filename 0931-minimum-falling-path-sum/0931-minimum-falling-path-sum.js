/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let dp = []

    for(let i = 0; i < matrix.length; i++){
        dp[i] = new Array(matrix[0].length).fill(0)
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){

            if(i == 0){
                dp[i][j] = matrix[i][j]
                continue
            }

            if(j == 0){
                dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j], dp[i-1][j+1])
                continue
            }

            if(j == matrix[0].length - 1){
                dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j], dp[i-1][j-1])
                continue
            }

            dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])
        }
    }

    console.log(dp[matrix[0].length - 2])

    return Math.min(...dp[matrix.length - 1])
};