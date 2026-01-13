/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let unique1 = new Set(nums1)
    console.log([...unique1])
    let unique2 = new Set(nums2)
    console.log([...unique2])
    let returnarray = []
    for(let i = 0 ; i < nums1.length ; i++ )
    {
        for(let j = 0 ; j < nums2.length ; j++)
        {
            if(nums1[i] == nums2[j])
            {
                returnarray.push(nums1[i])
            }
        }
    }

    console.log(returnarray)

    const array = new Set(returnarray)


    const unique = [...array]
    console.log([...array])

    return unique

    
};