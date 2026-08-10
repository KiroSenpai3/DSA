/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0)
    let stack = []

    for(let i = 0; i <= temperatures.length - 1; i++){

        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]] ){
            let a = stack.pop()
            ans[a] = i - a
        }

        stack.push(i)
    }

    return ans
};