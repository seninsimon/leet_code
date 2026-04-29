/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let map = {}

    for (let x of nums) {
        map[x] = (map[x] || 0) + 1
    }


    let array = Object.entries(map).sort((a, b) => b[1] - a[1])

    console.log(array)

    let result = []

    for (let i = 0; i < k; i++) {
        result.push(Number(array[i][0]))
    }

    return result


}



