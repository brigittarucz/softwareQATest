"use strict";
exports.__esModule = true;
exports.returnProduct = void 0;
/**
 * Return the product of 3 numbers
 * @param {Number} a The first number
 * @param {Number} b The second number
 * @param {Number} c The third number
*/
var returnProduct = function (a, b, c) {
    var arr = [a, b, c];
    // Type is inferred when number is assigned so using number here is redundant
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] / 10 > 1) {
            return false;
        }
        if (arr[i] == 0) {
            return 0;
        }
        result = result * arr[i];
    }
    return result;
    // arr.forEach(el => 
    //     result = result * el;
    // })
    // return a*b*c;
};
exports.returnProduct = returnProduct;
// Test + node only on the compiled version
console.log(exports.returnProduct((1 + 2), 2, 3));
// Possible test cases
// 1. Wrong operand (: instead of *)
// 2. Wrong operand (< instead of >)
// 3. Wrong operand (% instead of /)
// 4. Input number has more than 1 digit
// 3:9 line 3 space 9
