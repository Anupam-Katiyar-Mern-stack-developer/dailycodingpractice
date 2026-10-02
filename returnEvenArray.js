function returnEvenArray(arr){
    let result = [];

    for (let i of arr){
        if(i%2===0){
            result.push(i);
        }
    }
    return result;
}

let arr =[3, 7, 2, 9, 4, 8];

const result = returnEvenArray(arr);
console.log(result);