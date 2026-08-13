/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = []
    let n = height.length
    let sum = 0
    
    for(let i = 0; i < n; i++){
        
        while(stack.length && height[i] > height[stack[stack.length - 1]]){
            let a = stack.pop()
            if(!stack.length) break

            let left = stack[stack.length - 1]
            let width = i - left - 1

            let waterHeight = Math.min(height[left], height[i]) - height[a]
            sum += waterHeight * width
        }
        stack.push(i)
    }

    return sum
};