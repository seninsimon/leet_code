/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    //   array1 = nums1.slice(0,m)
    //   array2 = nums2.slice(0,n)
    //   let merged = [...array1 , ...array2].sort((a,b)=>(a-b))
    //   for(let i = 0 ; i < merged.length ; i++)
    //   {
    //     nums1[i] = merged[i]
    //   }

    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    console.log(i, j, k)

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        }
        else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }




};