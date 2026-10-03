function CountFreq(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let alreadyProccesed = false;

        for (let k = 0; k < i; k++) {
            if (arr[k] === arr[i]) {
                alreadyProccesed = true;
                break;
            }
        }
        if (alreadyProccesed) {
            continue;
        }
        let freq = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                freq++;
            }
        }
        result.push({
            value: arr[i],
            freq: freq,
        });
    }

    return result ;
}

const arr = [2, 3, 2, 4, 3, 2];

const result =CountFreq(arr);

console.log(result);