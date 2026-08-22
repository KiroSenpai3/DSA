/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
    let n = nums.length
    let ans = new Array(n).fill(-1)
    for(let i = 0; i < (n * 2); i++){
        let a = i%n
        while(stack.length && nums[a] > nums[stack[stack.length-1]]){
            let previousIndex = stack.pop()
            ans[previousIndex] = nums[a]
        }

        if(i < n){
            stack.push(a)
        }
    }

    return ans
};