/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let array = s.split("").sort().join("")
   let array2 = t.split("").sort().join("")
   
   if(array === array2)
   {
    return true
   }
   else
   {
    return false
   }
};