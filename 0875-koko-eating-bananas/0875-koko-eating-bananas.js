/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1
    let max = 0
    for (let a of piles) {
        if (a > max) max = a
    }
    let right = max
    let ans

    let M = function (divident, divisor) {
        let a = Math.floor(divident / divisor)
        if ((divident % divisor) > 0) return a + 1
        else return a
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        let sum = 0

        for (let pile of piles) {
            sum = sum + M(pile, mid)
        }

        if (sum <= h) {
            ans = mid
            right = mid - 1
        }
        else left = mid + 1
    }
    return ans
};