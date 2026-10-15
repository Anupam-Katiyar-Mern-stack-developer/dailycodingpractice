function findAllDuplicates(arr) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                let check = false;

                for (let k = 0; k < result.length; k++) {
                    if (result[k] === arr[i]) {
                        check = true;
                        break;
                    }
                }

                if (check === false) {
                    result.push(arr[i]);
                }

            }
        }
    }
    return result;
}
const arr = [4, 7, 7, 7, 2, 2, 5];

const result = findAllDuplicates(arr);
console.log(result);