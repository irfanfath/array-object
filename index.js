const { sortDescending, maxSubarraySum, sumEvenNumbers } = require('./array_object_functions');

// Silahkan anda merubah nilai Input disini
const arrayInput = [1, 2, 4, 3, 5, 3, 2, 1];
const subarrayInput = [100, 200, 300, 400];
const subarrayLength = 2;
const nestedObjectInput = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

console.log("1. Sorted Descending:", sortDescending(arrayInput));
console.log("2. Max Subarray Sum:", maxSubarraySum(subarrayInput, subarrayLength));
console.log("3. Sum of Even Numbers:", sumEvenNumbers(nestedObjectInput));
