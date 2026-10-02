function sumOfBetweenZeero(arr){
    let sum = 0;
    let check =false;

    for(let  i =0;i<arr.length; i++){
        if(arr[i] === 0 && check === false){
            check=true;
        }else if(arr[i] === 0 && check ===true ){
            check = false;
        }else if(check === true){
            sum += arr[i];
        }
    }
    return sum;
}

const arr =[5, 0, 4, 7, 2, 0, 9, 3];

const result =sumOfBetweenZeero(arr);
console.log(result);