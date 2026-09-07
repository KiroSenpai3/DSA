/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let recur = function(x,n){
        if (n === 0) return 1
        if (n === 1) return x

        if(n < 0){
            x = 1/x
            n = Math.abs(n)
        }

        if((n%2) === 0){
            let y = recur(x , n/2)
            return y*y
        }
        else{
            let y = recur(x , (n - 1)/2)
            return x*y*y
        }
    }
    return recur(x,n)
};