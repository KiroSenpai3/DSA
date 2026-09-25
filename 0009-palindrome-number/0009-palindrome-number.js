/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = x.toString()
    for(let i = 0; i < Math.floor(a.length/2); i++){
        if(a[i] !== a[a.length - i - 1]) return false
    }
    return true
};