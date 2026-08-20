/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    let count = function (k) {
        let freq = new Map()
        let left = 0
        let ans = 0
        for (let right = 0; right < nums.length; right++) {

            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)

            while (freq.size > k) {
                freq.set(nums[left], freq.get(nums[left]) - 1)

                if (freq.get(nums[left]) === 0) freq.delete(nums[left])
                left++
            }

            ans = ans + right - left + 1
        }
        return ans
    }

    return count(k) - count(k-1)
    
};