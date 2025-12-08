/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

   const unique = new Set(nums)
   const array = [...unique]
   const newarr = array.sort((a,b)=>b-a)
   console.log(newarr)
   if(newarr.length < 3)
   {
    return newarr[0]
   }
   else
   {
    return newarr[2]
   }
    
    
};