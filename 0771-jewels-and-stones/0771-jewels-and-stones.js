/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0
    for (let x in stones) {
        if (jewels.includes(stones[x])) {
            count++
        }
    }
    console.log(count)
    return count

};