/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let nums = people.sort((a,b) => b - a)
    let right = nums.length - 1
    let left = 0
    let count = 0

    while(left <= right){
        if(nums[left] + nums[right] <= limit){
            count++
            left++
            right--
        }
        else{
            count++
            left++
        }
    }

    return count
};