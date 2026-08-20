/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {

    let countSum = function (goal) {
        let left = 0
        let sum = 0
        let ans = 0
        for (let right = 0; right < nums.length; right++) {

            sum += nums[right]

            while (sum > goal) {
                sum = sum - nums[left]
                left++
            }

            ans = ans + right - left + 1
        }

        return ans
    }

    return goal !== 0 ? countSum(goal) - countSum(goal - 1) : countSum(goal)
};