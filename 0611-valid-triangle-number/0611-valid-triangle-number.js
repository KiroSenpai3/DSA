/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => b-a)
    let count = 0
    for(let i = 0; i < nums.length; i++){
        let left = i+1
        let right = nums.length-1
        while(left < right){
            let sum = nums[left] + nums[right]
            if(sum > nums[i]){
                count += right - left
                left++
            }
            else right--
        }
    }
    return count
};