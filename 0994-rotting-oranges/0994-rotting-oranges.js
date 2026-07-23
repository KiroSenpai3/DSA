/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let queue = []

    let rows = grid.length
    let cols = grid[0].length
    let fresh = 0
    let size = 0
    let minutes = 0

    let directions = [
        [1 , 0],
        [-1 , 0],
        [0 , 1],
        [0 , -1]
    ]

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] == 2){
                queue.push([i , j])
            }
            if(grid[i][j] == 1){
                fresh++
            }
        }
    }

    if(fresh === 0) return 0

    while(queue.length){
        size = queue.length

        for(let i =  0; i < size; i++){

            let [r , c] = queue.shift()

            for(let [row, col] of directions){
                let newRow = row + r
                let newCol = col + c

                if(newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                grid[newRow][newCol] == 1){
                    queue.push([newRow, newCol])
                    grid[newRow][newCol] = 2
                    fresh--
                }
            }
        }
        minutes++
    }

    if(fresh) return -1
    return minutes-1

};