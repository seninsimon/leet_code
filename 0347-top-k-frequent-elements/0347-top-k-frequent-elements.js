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



    let array = []

    for (let key in map) {
        array.push(map[key])
    }

    let sorted = array.sort((a, b) => b - a)


    let result = []

    console.log(map)
    console.log(sorted)


    for (let key in map) {
        for (let x of sorted) {
            if (map[key] === x) {
                result.push(Number(key))
                result = [...new Set(result)]
                if (result.length == k) {
                    console.log(result)
                    return result
                }
            }
        }
    }

    console.log(result)



};