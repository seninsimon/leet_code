/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
     let map = {}

     for(let x in nums)
     {
        map[nums[x]] = (map[nums[x]]|| 0) + 1

        if(map[nums[x]] > Math.floor(nums.length/2) )
        {
            return nums[x]
        }
     }

     console.log(map)

};