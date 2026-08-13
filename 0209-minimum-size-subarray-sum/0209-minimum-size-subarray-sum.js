/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let ans = Infinity
    let left = 0
    let sum = 0

    for(let i = 0; i < nums.length; i++){

        sum += nums[i]

        while(sum >= target){
            ans = Math.min(ans, i - left + 1)
            sum -= nums[left]
            left++
        }
        
    }

    return ans === Infinity ? 0 : ans
};