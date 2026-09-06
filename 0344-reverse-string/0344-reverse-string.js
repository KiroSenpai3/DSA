/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let recur = function(s, left, right){
        if(left >= right) return
        recur(s, left+1, right-1)
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
    }
    recur(s,0, (s.length - 1))
};