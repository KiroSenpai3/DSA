/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let max = []
    let min = []
    let left = 0
    let ans = 0
    for(let right = 0; right < nums.length; right++){

        
        while(max.length && nums[right] > nums[max[max.length - 1]]){
            max.pop()
        }
        max.push(right)

        
        while(min.length && nums[right] < nums[min[min.length - 1]]){
            min.pop()
        }
        min.push(right)

        while((nums[max[0]] - nums[min[0]]) > limit){
            left++
            while(max.length && max[0] < left){
            max.shift()
            }
            while(min.length && min[0] < left){
            min.shift()
            }
            
        }

        ans = Math.max(ans, right - left + 1)
        
    }

    return ans
};