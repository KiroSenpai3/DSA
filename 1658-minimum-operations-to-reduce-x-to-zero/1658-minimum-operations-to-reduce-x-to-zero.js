/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let left = 0
    let target   
    let sum = 0
    let ans = 0
    for(let right = 0; right < nums.length; right++){
        sum += nums[right]
    }
    target = sum - x
    sum = 0

    if (target < 0) return -1
    if (target === 0) return nums.length

    for(let right = 0; right < nums.length; right++){
        
        sum+= nums[right]
        
        while(sum > target){
            sum -= nums[left]
            left++
        }

        if(sum === target){
            ans = Math.max(ans, right - left + 1)
        }
    }

    return ans? nums.length - ans : -1
};