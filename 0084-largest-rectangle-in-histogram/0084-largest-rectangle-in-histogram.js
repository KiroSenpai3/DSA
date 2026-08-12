/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for(let i = 0; i <= heights.length; i++){

        let currentHeight = i === heights.length
            ? 0
            : heights[i];

        while(
            stack.length &&
            currentHeight < heights[stack[stack.length - 1]]
        ){

            let index = stack.pop();

            let height = heights[index];

            let left = stack.length
                ? stack[stack.length - 1]
                : -1;

            let width = i - left - 1;

            let area = height * width;

            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }

    return maxArea;
};