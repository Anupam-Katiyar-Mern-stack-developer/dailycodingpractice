function secondLargest(arr){
    let largest =arr[0];
    let slargest =largest;


    for(let i of arr){

        if(i > largest){
            slargest = largest;
            largest =i; 
        } else if(i < largest  && i > slargest){
            slargest = i;
            
        }
    }

    return slargest;
}

const array =[10, 30, 20, 30, 15];

const result =secondLargest(array);
console.log(result);