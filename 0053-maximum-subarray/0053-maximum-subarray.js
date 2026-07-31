/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let arr = []
    let sum  = 0
    for(let  i = 0; i < nums.length ; i++){
        sum = Math.max(sum + nums[i] , nums[i])
        arr.push(sum)
    }
    return Math.max(...arr)
};