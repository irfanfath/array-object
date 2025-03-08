// 1. Fungsi untuk mengurutkan angka dari terbesar ke terkecil
function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 2. Fungsi untuk menemukan jumlah maksimum subarray
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - num; i++) {
        let tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += arr[i + j];
        }
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// 3. Fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
function sumEvenNumbers(obj) {
    let sum = 0;
    function helper(innerObj) {
        for (let key in innerObj) {
            if (typeof innerObj[key] === 'number' && innerObj[key] % 2 === 0) {
                sum += innerObj[key];
            } else if (typeof innerObj[key] === 'object') {
                helper(innerObj[key]);
            }
        }
    }
    helper(obj);
    return sum;
}

module.exports = { sortDescending, maxSubarraySum, sumEvenNumbers };
