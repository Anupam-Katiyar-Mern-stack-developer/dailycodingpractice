function countpostivebetwenZeeros(arr){
    let count =0;
    let check =false;

    for(let i =0 ; i<arr.length;i++){
        if(arr[i] === 0 && check === false){
            check = true;

        }else if(check === true && arr[i] > 0){
            count ++;
        }
        else if(arr[i] === 0 && check === true ){
            return count;
        }
    }

    return count;

}

const arr = [5, 0, 4, -2, 7, 3, 0, 9];

const result =countpostivebetwenZeeros(arr);

console.log(result);