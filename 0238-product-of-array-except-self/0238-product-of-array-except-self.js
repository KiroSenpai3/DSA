/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = []
    let left = []
    left[0] = 1
    let right = []
    right[nums.length - 1] = 1
    for(let i = 1; i < nums.length; i++){
        left[i] = left[i - 1] * nums[i-1]
        right[nums.length - 1 - i] = right[nums.length - i] * nums[nums.length - i] 
    }

    for(let i = 0; i < nums.length; i++){
        arr.push(left[i] * right[i])
    }

    return arr
};