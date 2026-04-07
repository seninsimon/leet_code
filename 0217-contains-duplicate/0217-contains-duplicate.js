/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let array = [...new Set(nums)]
    if(array.length !== nums.length)
    {
        return true
    }
    return false
    
};