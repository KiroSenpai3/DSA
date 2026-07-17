/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let store = new Map()
    for(let i = 0; i<names.length; i++){
        store.set(heights[i], names[i])
    }
    
    let a = heights.sort((a,b) => b-a)

    let c = []
    for(let z of a){
        c.push(store.get(z))
    }
    return c
};