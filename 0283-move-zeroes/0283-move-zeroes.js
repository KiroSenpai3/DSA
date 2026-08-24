/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left  = 0
    let right = 0
    while(left < nums.length){
        while(left < nums.length && nums[left] !== 0){
            left++
        }
        right = left
        while(right < nums.length && nums[right] === 0){
            right++
        }
        if(right === nums.length) break
        [nums[left], nums[right]] = [nums[right] , nums[left]]
        left++
    }
};