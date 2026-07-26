/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    let arr = new Array(nums.length).fill(1)

    arr[0] = 1

    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]){
                arr[i] = Math.max(arr[i], 1 + arr[j])
            }
        }
    }

    return Math.max(...arr)

};