/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length
    let stack = []
    let ans = 0

    for(let i = 0; i <= n; i++){

        let left = 0

        let currentHeight = i === n ? 0 : heights[i]

        while(stack.length && currentHeight < heights[stack[stack.length - 1]]){
            let a = stack.pop()
            if(stack.length){
                left = stack[stack.length - 1] 
            }
            else{
                left = -1
            }
            
            let width = i - left - 1
            
            ans = Math.max(ans, width*heights[a])
        }
        
        if(i < n){
            stack.push(i)
        }

    }

    return ans
};