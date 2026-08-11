/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
     let n = nums.length;
    let stack = [];
    let ans = new Array(n).fill(-1);

    for (let i = 0; i < 2 * n; i++) {

        let index = i % n;

        while (
            stack.length &&
            nums[index] > nums[stack[stack.length - 1]]
        ) {
            let prev = stack.pop();

            ans[prev] = nums[index];
        }

        // Only put each actual index into the stack once
        if (i < n) {
            stack.push(index);
        }
    }

    return ans;
};