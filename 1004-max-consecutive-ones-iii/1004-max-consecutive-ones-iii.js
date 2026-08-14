/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let zero = 0
    let ans = 0

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === 0) zero++

        if(zero > k){
            while(nums[left] === 1){
                left++
            }
            left++
            zero--
        }

        ans = Math.max(ans, i - left + 1)
    }
    
    return ans
};