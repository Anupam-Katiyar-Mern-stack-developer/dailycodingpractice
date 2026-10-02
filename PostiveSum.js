function PostiveSum(arr){
    let sum =0;
    for (let i of arr){
        if(i>0){
            sum +=i;
        }else{
            break;
        }
    }
    return sum;
}

 const array = [5, 10, 8, -3, 7, 9];

 const result =PostiveSum(array);

 console.log(result);