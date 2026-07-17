/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x == 0) return 0
    let res = 0
    if (x > 0) {
        while (x > 0) {
            let y = x % 10
            res = res * 10 + y
            x = Math.floor(x / 10)
        }
        if(res <= (-2)**31 || res >= 2**31 - 1) return 0
        return res
    }
    else {
        x = Math.abs(x)
        while (x > 0) {
            let y = x % 10
            res = res * 10 + y
            x = Math.floor(x / 10)
        }
        if(res <= (-2)**31 || res >= 2**31 - 1) return 0
        return -res
    }
};