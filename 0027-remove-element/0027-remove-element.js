/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let count = 0
    let right = nums.length - 1
    while(left <= right){
        while(right >= 0 && nums[right] === val){
            right--
        }
        while(left < nums.length && nums[left] !== val){
            left++
        }

        if(left > right) break

        [nums[left] , nums[right]] = [nums[right] , nums[left]]
        left++
        right--
    }
    return right+1
};