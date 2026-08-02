/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let mid
    if(nums[left] < nums[right]) return nums[0]

    while(left < right){
        if(left + 1 == right) break
        mid = Math.floor((left + right) / 2)
        if(nums[mid] < nums[left]){
            right = mid
            continue
        }
        else{
            left = mid
        }
    }

    return nums[left] < nums[right] ? nums[left] : nums[right]
};