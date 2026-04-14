/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let array = s.split("")
    let map = {}

    for (let char of array) {
        map[char] = (map[char] || 0) + 1
    }

    for (let key in map) {
        if (map[key] == 1) {
            return array.indexOf(key)
        }

    }

    return -1

    console.log(map)
};