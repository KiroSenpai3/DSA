/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    let right = 1
    while(right < nums.length){
        if(nums[left] !== nums[right]){
            nums[left+1] = nums[right]
            left++
            right++
        }
        if(nums[left] === nums[right]){
            right++
        }
    }
    return left + 1
};