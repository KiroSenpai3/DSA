/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map()

    for(let num of nums){
        map.set(num, map.has(num)? map.get(num) + 1 : 1)
    }

    let sum = 0

    for([key, value] of map){
        if(value === 1) sum+= key
    }

    return sum
};