/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b) => a-b)
    let ans = Infinity

    for(let i = 0; i < nums.length; i++){

        let left = i + 1
        let right = nums.length - 1

        while(left < right){

            let sum = nums[i] + nums[left] + nums[right]

            if(Math.abs(target - sum) < Math.abs(target - ans)){
                ans = sum
            }

            if(target === sum){
                return sum
            }
            if(sum > target){
                right--
            }
            else left++
        }
    }

    return ans
};