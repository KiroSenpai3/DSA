/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let ans = 0
    let left = 0

    for(let i = 0; i < s.length; i++){

        while(set.has(s[i])){
            set.delete(s[left])
            left++
        }

        set.add(s[i])

        ans = Math.max(ans, i - left + 1)
    }

    return ans
};