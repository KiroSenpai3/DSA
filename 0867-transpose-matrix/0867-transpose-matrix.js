/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let mat = []
    for(let i = 0; i < matrix[0].length; i++){
        mat[i] = new Array(matrix.length).fill(0)
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            mat[j][i] = matrix[i][j]
        }
    }

    return mat
};