/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let ans = 0
    let area

    while(left < right){
        let width = right - left

        if(height[left] > height[right]){
            area = width*height[right]
            ans = Math.max(ans, area)
            right--
        }
        else{
            area = width*height[left]
            ans = Math.max(ans, area)
            left++
        }
    }

    return ans

};