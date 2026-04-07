/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  let string = s.toLowerCase().replace(/[^a-z0-9]/g,"")
  let reverseString = string.split("").reverse().join("")
  return string === reverseString
 
};