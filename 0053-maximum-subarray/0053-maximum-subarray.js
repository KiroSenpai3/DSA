/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let ans = nums[0]
    let sum  = 0
    for(let  i = 0; i < nums.length ; i++){
        sum = Math.max(sum + nums[i] , nums[i])
        ans = Math.max(sum , ans)
    }
    return ans
};