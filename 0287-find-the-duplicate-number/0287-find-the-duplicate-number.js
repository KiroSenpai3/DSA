/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map()
    for(let num of nums){
        if(map.get(num) === 1) return num
        map.set(num, 1)
    }
};