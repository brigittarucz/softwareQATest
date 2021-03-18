export const returnProduct = (a: number, b: number, c: number):number|boolean => {
    const arr: number[] = [a,b,c];
    // Type is inferred when number is assigned so using number here is redundant
    let result = 1;

    for(let i=0; i < arr.length; i++) {
        if(arr[i]/10 > 1) {
            return false;
        }
        if(arr[i] == 0) {
            return 0;
        }
        result = result * arr[i];
    }

    return result;

    // arr.forEach(el => 
    //     result = result * el;
    // })

    // return a*b*c;
}

// Test + node only on the compiled version

console.log(returnProduct((1+2), 2, 3));

// Possible test cases
// 1. Wrong operand (: instead of *)
// 2. Wrong operand (< instead of >)
// 3. Wrong operand (% instead of /)
// 4. Input number has more than 1 digit

// 3:9 line 3 space 9
