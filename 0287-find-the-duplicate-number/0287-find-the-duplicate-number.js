/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let maap = new Map()
    for(let num of nums){
        if(maap.get(num) === 1) return num
        maap.set(num, 1)
    }
};