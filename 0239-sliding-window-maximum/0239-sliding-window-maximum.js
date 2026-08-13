/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let dequeue = []
    let ans = []
    for(let i  = 0; i < nums.length; i++){
        
        while(dequeue.length && dequeue[0] <= i-k){
            dequeue.shift()
        }

        while(dequeue.length && nums[i] > nums[dequeue[dequeue.length - 1]]){
            dequeue.pop()
        }

        dequeue.push(i)

        if(i >= k-1){
            ans.push(nums[dequeue[0]])
        }

    }

    return ans
};