/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let sum = 0
    
    let map = new Map()
    map.set(0,1)

    for(let num of nums){

        sum += num
        

        let needed = sum - k

        if(map.has(needed)){
            count += map.get(needed)
        }

        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
    }
    return count
};