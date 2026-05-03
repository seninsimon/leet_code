/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let reverse = s.trim().split(/\s+/).reverse()
    
    return reverse.join(" ")
    
};