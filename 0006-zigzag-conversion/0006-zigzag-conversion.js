/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = new Array(numRows).fill("");
    let row = 0;
    let direction = 1; // 1 = down, -1 = up

    for (let c of s) {
        rows[row] += c;

        if (row === 0) {
            direction = 1;
        } else if (row === numRows - 1) {
            direction = -1;
        }

        row += direction;
    }

    return rows.join("");
};