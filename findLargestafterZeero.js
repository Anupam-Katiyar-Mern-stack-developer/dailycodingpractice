function findLargestAfterzeero(arr){
    let largest =null;
    let check =false;

    for(let i =0; i<arr.length;i++){
        if(arr[i]=== 0 && check === false){
            check =true;
            if(i+1 < arr.length){
                 largest = arr[i+1];
            }

        }else if(check === true){
            if(largest < arr[i]){
                largest = arr[i];
            }
        }
    }
    return largest;
}

const arr =[10, 20, 5, 30];

const result = findLargestAfterzeero(arr);

console.log(result);