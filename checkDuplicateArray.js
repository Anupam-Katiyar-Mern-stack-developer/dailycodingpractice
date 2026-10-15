function checkDuplicate(arr){
    for (let i= 0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                // return arr[i];
                console.log(arr[i]);
            }
        }
    }
    return false;
}

const arr = [4, 7, 2, 9, 7, 5];

// const result = checkDuplicate(arr);
checkDuplicate(arr)
// console.log(result);