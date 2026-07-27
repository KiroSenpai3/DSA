/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let a = new Map()
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]%2 == 0) a.set(nums[i], (a.get(nums[i]) || 0) + 1)
        }
        if(a.size == 0) return -1
        let b = [...a.entries()].sort((a,b) => b[1] - a[1])[0][1]
        let ans = 100001
        for(let[key,value] of a){
            if(value == b && ans>key) ans = key
        }
        return ans
};