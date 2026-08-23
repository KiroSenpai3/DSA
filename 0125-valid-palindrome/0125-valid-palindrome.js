/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = 'abcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let sen = s.toLowerCase()
    let left = 0
    let right = s.length - 1
    while(left < right){
        while(!string.includes(sen[left]) && left < s.length && !num.includes(sen[left])) left++
        while(!string.includes(sen[right]) && right > -1 && !num.includes(sen[right])) right--
        if(sen[left] === sen[right]){
            left++
            right--
        }
        else return false
    }
    return true
};