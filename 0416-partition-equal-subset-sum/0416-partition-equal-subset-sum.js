/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let total = nums.reduce((acc, i) => acc + i, 0)

    if(total % 2 !== 0) return false
    let target = total / 2

    let dp = Array.from({length : nums.length} , () => new Array(target + 1))

    let solve = function (i, remaining) {
        if(remaining === 0) return true
        if(i === nums.length) return false

        if(dp[i][remaining] !== undefined) return  dp[i][remaining]

        let take = solve(i+1, remaining - nums[i])
        let skip = solve(i+1, remaining)
        let result = take || skip 

        dp[i][remaining] = result
        return result
    }
    return solve(0, target)
};