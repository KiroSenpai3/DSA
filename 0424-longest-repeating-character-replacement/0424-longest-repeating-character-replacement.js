/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let ans = 0
    let left = 0
    let maxFreq = 0
    let freq = new Map()

    for(let right = 0; right < s.length; right++){
        
        freq.set(s[right] , (freq.get(s[right]) || 0) + 1)
        maxFreq = Math.max(maxFreq, freq.get(s[right]))

        let replacement = right - left + 1 - maxFreq

        while(replacement > k){
            freq.set(s[left], freq.get(s[left]) - 1)
            left++
            replacement--
        }  

        ans = Math.max(ans, right - left + 1)

    }

    return ans
}