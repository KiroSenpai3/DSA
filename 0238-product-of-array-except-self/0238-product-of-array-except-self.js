/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = []
    left[0] = 1
    let ans = 1
    for(let i = 1; i < nums.length; i++){
        left[i] = left[i - 1] * nums[i-1]
    }

    for(let i = nums.length - 1; i >= 0; i--){
        left[i] = left[i] * ans
        ans = ans * nums[i]
    }

    return left
};