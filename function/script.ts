export const returnProduct = (a: number, b: number, c: number):number => {
    var arr: number[] = [a,b,c];
    var result: number = 1;

    for(var i=0; i < arr.length; i++) {
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

console.log(returnProduct(1,2,3));

// Possible edge cases
// 1. 