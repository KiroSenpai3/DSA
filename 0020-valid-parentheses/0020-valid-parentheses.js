/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    let map = new Map()
    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')
    for(let a of s){
        if(a == '(' || a == '{' || a == '['){
            arr.push(a)
        }
        if(a == ')' || a == '}' || a == ']'){
            if(map.get(arr[arr.length - 1]) == a){
                arr.pop()
            }
            else return false
        }
    }
    if(arr.length === 0) return true
    else return false
};