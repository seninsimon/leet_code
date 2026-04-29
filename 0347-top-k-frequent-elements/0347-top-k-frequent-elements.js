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

    let frequencies = Object.values(map)
    console.log(frequencies)
    let sorted = [...new Set(frequencies)].sort((a, b) => b - a)
    console.log(sorted)

    let result = []

    for (let freq of sorted) {
        
        for (let key in map) {
            if (map[key] === freq) {
                result.push(Number(key))
                if (result.length === k) return result
            }
        }
    }

    return result
};