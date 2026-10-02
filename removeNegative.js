function removeNegative(arr){
    let result = [];

    for (let i of arr){
        if(i > 0){
            result.push(i);
        }
    }
    return result
}
const arr =[4, -2, 7, -5, 3, -1, 8];
const result =removeNegative(arr);
console.log(result);