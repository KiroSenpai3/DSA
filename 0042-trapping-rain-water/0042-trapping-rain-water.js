/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let Lmax = height[0]
    let Rmax = height[height.length - 1]
    let left = 0
    let right = height.length - 1
    let ans = 0
    
    while(left <= right){
        if(Lmax < Rmax){
            if(height[left] > Lmax){
                Lmax = height[left]
            }
            else{
                ans += Lmax - height[left]
            }
            left++
        }
        else{
            if(height[right] > Rmax){
                Rmax = height[right]
            }
            else{
                ans += Rmax - height[right]
            }
            right--
        }
    }

    return ans
};