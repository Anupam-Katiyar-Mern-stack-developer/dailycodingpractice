function returnlastNegative(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }

    return null;
}

const arr = [4, -2, 7, -8, 3, -5, 9];

let result = returnlastNegative(arr);

console.log(result);