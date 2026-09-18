/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = 'abcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let sen = s.toLowerCase().trim(" ")
    let recur = function(s, left, right){
        if(left >= right) return true
        if(!string.includes(s[left]) && !num.includes(s[left])){
            return recur(s, ++left, right)
        }
        if(!string.includes(s[right]) && !num.includes(s[right])){
            return recur(s, left, --right)
        }
        if(s[left] === s[right]){
            return recur(s, ++left, --right)
        }
        return false
    }
    return recur(sen, 0, sen.length - 1)
};