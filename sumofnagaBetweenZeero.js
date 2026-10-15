function sumofnagabetweenZeero(arr) {
    let check = false;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && check === false) {
            check = true;
        } else if (arr[i] === 0 && check === true) {
            break;
        }

        else if (check === true && arr[i] < 0) {
            sum += arr[i];
        }
    }

    return sum;
}

const arr = [2, 0, 5, -3, 8, -6, 4, 0, 9];

const result = sumofnagabetweenZeero(arr);
console.log(result);