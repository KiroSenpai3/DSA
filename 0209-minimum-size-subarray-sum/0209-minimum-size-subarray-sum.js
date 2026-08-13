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

        if(left == 0 && i == nums.length - 1 && sum < target) return 0

        while(sum >= target){
            ans = Math.min(ans, i - left + 1)
            sum -= nums[left]
            left++
        }
        
    }

    return ans
};