/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = []
    const fibo = function(n){
        if (n==0) return 0
        if (n==1) return 1
        if(dp[n] != undefined) return dp[n]
        let ans = fibo(n-1) + fibo(n-2)
        dp[n] = ans
        return ans
    }
    return fibo(n)
};