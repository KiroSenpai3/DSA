/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = []

    let tokens = path.split('/')

    console.log(tokens)

    for (let token of tokens) {
        if (token === "" || token === ".") continue

        if (token === "..") {
            if (stack.length) {
                stack.pop()
                continue
            }
            continue
        }

        stack.push(token)

    }

    return "/" + stack.join('/')
};