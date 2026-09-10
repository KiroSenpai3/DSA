/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    let recur = function(index, currentSum){

        if(index === nums.length){
            if(currentSum === target) return 1
            else return 0
        }
 
        return recur(index+1, currentSum + nums[index]) + recur(index + 1, currentSum - nums[index])
    }

    return recur(0,0)

};