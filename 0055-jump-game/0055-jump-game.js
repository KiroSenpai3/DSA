/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    farthest = 0

for(i = 0; i < nums.length; i++){

    if(i > farthest)
        return false;

    farthest = Math.max(farthest, i + nums[i]);

}

return true;
};