/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []

    let ans = []

    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let recur = function (index, currentString){

        if(index === digits.length){
            ans.push(currentString)
            return
        }

        for(let letter of map[digits[index]]){
            recur(index+1, currentString + letter)
        }
    }

    recur(0, "")
    return ans
};