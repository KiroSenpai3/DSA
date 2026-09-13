/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {

    function recur(n, k) {
        if (n === 1) return 0

        let parent = recur(n - 1, Math.ceil(k / 2))

        if (k % 2 === 1) {
            return parent
        } else {
            return 1 - parent
        }
    }

    return recur(n, k)
};