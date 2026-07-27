/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let set = new Set()
    let a = n

    while(1){

        if(set.has(a)) return false
        set.add(a)

        let sum = 0

        while(a > 0){
            let b = a%10
            sum = sum + b**2
            a = Math.floor(a/10)
        }
        if(sum === 1) return true
        else{
            
            a = sum
        }
    }

};