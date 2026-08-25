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
            sum = sum - nums[left]
            left++
        }
        if(sum + nums[left - 1] >= target){
            ans = Math.min(ans, right - left + 2)
        }
    }

    return ans === Infinity ? 0 : ans

};