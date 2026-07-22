/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let arr = []
    for(let i = nums2.length - 1; i>=0; i--){
        while(stack.length !== 0 && nums2[i] >= stack[stack.length - 1]){
            stack.pop()
        }
        if(stack.length == 0){
                arr.push(-1)
                stack.push(nums2[i])
                continue
            }
        if(stack.length !== 0){
            arr.push(stack[stack.length - 1])
            stack.push(nums2[i])
        }
    }
    nums2.reverse()
    let map = new Map()
    for(let i = 0; i< nums2.length; i++){
        map.set(nums2[i], arr[i])
    }
    let ans = []
    for(let a of nums1){
        ans.push(map.get(a))
    }
    return ans
};