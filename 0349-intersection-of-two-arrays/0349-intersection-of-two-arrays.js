/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let arr =[...new Set(nums1)]
    let arr2 = new Set(nums2)
    let result = []

    for(let x of arr)
    {
       if(arr2.has(x))
       {
        result.push(x)
       }
    }

    return result
    
};