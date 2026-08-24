/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let left = 0
    let right = nums.length - 1
    let i = 0

    while(i <= right) {

        // Find a 0 that is not already in the 0-region
        while(left <= right && nums[left] === 0) {
            left++
        }

        // Find a 2 that is not already in the 2-region
        while(right >= left && nums[right] === 2) {
            right--
        }

        if(i < left) {
            i = left
        }

        if(i > right) break

        if(nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]]
            left++
            i++
        }
        else if(nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]]
            right--
        }
        else {
            i++
        }
    }
};