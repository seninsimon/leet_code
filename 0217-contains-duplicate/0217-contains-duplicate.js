/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // let seen = [... new Set(nums)]
    // console.log(seen)
    // console.log(nums)
    // if(seen.length !== nums.length) 
    // {
    //     return true
    // }
    // else
    // {
    //     return false
    // }

     let seen = new Set()

     for(let num of nums)
     {
        if(seen.has(num)) return true
        seen.add(num)
     }

     return false



    
};