/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapi = new Map()
    for(let i = 0; i < nums.length; i++){
        if(mapi.has(nums[i])) return [mapi.get(nums[i]) , i]
        else{
            mapi.set(target - nums[i], i)
        }
    }
};