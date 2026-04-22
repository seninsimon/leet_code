/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let value = BigInt(digits.join("")) + 1n

    const num = value.toString().split("")

    let array = []
    for (let x in num) {
        array.push(Number(num[x]))
    }

    console.log(array)

    return array

}