/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let num = nums.sort((a,b) => a-b)
    let left
    let right
    let target
    let ans = []
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && num[i] === num[i-1]) continue
        target = -num[i]
        left = i + 1
        right = num.length - 1 
        while(left < right){
            if(num[left] + num[right] === target){
                ans.push([num[i], num[left], num[right]])
                left++
                right--
                while(left < right && num[left] === num[left-1]){ left++}
            while(left < right && num[right] === num[right+1]){ right--}
            }
            
            else if(num[left] + num[right] > target) right--
            else left++
        }
    }
    return ans
};