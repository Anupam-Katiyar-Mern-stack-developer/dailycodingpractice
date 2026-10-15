function findLargestbetweenZeero(arr) {
    let largest = null;
    let check = false;

    for (let i = 0; i < arr.length; i++) {


        if (arr[i] === 0 && check === false) {
            check = true;

            largest = arr[i + 1];


        } else if (arr[i] === 0 && check === true) {
            break;
        }
        else if (check === true && arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const arr = [3, 0, -5, -2, -8, 0, 10];

const result = findLargestbetweenZeero(arr);

console.log(result);