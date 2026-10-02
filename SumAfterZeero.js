function sumAfterZeero(arr){
    let sum = 0;
    let foundZeero = false;

    for (let i of arr){
        
        if(foundZeero === true){
            sum +=i;
        }
        if(i === 0){
            foundZeero = true;
        }
    }
    return sum;

}

const arr=[5,8,0,4,7,2];

const result =sumAfterZeero(arr);

console.log(result);