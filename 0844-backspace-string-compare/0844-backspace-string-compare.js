/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function nextChar(str, right) {

        let skip = 0

        while(right >= 0) {

            if(str[right] === "#") {
                skip++
            }
            else if(skip > 0) {
                skip--
            }
            else {
                return right
            }

            right--
        }

        return -1
    }

    let r1 = s.length - 1
    let r2 = t.length - 1

    while(true) {

        r1 = nextChar(s, r1)
        r2 = nextChar(t, r2)

        if(r1 === -1 || r2 === -1) {
            return r1 === r2
        }

        if(s[r1] !== t[r2]) {
            return false
        }

        r1--
        r2--
    }
};