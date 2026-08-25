/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let ans = Infinity
    let left = 0
    let sum = 0

    for(let right = 0; right < nums.length; right++){
        sum += nums[right]
        while(sum >= target){
            ans = Math.min(ans, right - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    return ans === Infinity ? 0 : ans

};