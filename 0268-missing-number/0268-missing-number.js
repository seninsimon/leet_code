/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {


    let n = nums.length 
    let expected_sum = n*(n+1)/2

    let actutalSum = 0

    for(let num of nums){
        actutalSum = actutalSum + num
    }

    expected_number = expected_sum - actutalSum

    return  expected_number
    
};