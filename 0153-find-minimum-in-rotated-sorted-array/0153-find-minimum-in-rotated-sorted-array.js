/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let mi
    if(nums[left] < nums[right]) return nums[0]

    while(left < right){
        if(left + 1 == right) break
        mi = Math.floor((left + right) / 2)
        if(nums[mi] < nums[left]){
            right = mi
            continue
        }
        else{
            left = mi
        }
    }

    return nums[left] < nums[right] ? nums[left] : nums[right]
};