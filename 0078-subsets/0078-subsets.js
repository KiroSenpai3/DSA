/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = []
    let recur = function(index, currentSubset){
        if(index === nums.length){
            arr = [...arr, currentSubset]
            return
        }
        
        recur(index + 1, [...currentSubset, nums[index]])
        recur(index + 1, currentSubset)
    }
    recur(0, arr)
    return arr
};