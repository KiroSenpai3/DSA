/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let map = new Map()
    for(let num of nums2){

        while(num > stack[stack.length - 1] && stack.length){
            map.set(stack[stack.length - 1] , num)
            stack.pop()
        }

        stack.push(num)
    }

    let ans = []
    
    for(let num of nums1){
        if(map.get(num) == undefined) ans.push(-1)
        else{ans.push(map.get(num))}
    }

    return ans
};