/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let visited = []
    for (let i = 0; i < grid.length; i++) {
        visited.push(new Array(grid[0].length).fill(false))
    }

    let islands = 0

    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let BFS = function (ro, co) {
        let queue = []
        queue.push([ro , co])
        visited[ro][co] = true

        while (queue.length) {

            let  [r , c] = queue.shift()

            for (let [row, col] of directions) {
                let newRow = r + row
                let newCol = c + col

                if (newRow < grid.length &&
                    newRow >= 0 &&
                    newCol < grid[0].length &&
                    newCol >= 0 &&
                    visited[newRow][newCol] == false &&
                    grid[newRow][newCol] == "1") {
                    queue.push([newRow, newCol])
                    visited[newRow][newCol] = true
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (visited[i][j] == false && grid[i][j] == "1") {
                islands++
                BFS(i, j)
            }
        }
    }

    return islands
};