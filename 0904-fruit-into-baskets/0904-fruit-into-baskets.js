/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let freq = new Map()
    let ans = 0
    let left = 0
    
    for(let right = 0; right < fruits.length; right++){
        freq.set(fruits[right], (freq.get(fruits[right]) || 0) + 1)

        while(freq.size > 2){
            freq.set(fruits[left], freq.get(fruits[left]) - 1)
            if(freq.get(fruits[left]) === 0){
                freq.delete(fruits[left])
            }
            left++
        }

        ans = Math.max(ans, right - left + 1)
    }
    return ans
};