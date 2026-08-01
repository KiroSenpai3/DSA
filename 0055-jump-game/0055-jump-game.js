/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let farthest = 0

    for(let i = 0; i<nums.length; i++){
        if(farthest < i) return false
        farthest = Math.max(nums[i] + i, farthest)
    }

    return true

};