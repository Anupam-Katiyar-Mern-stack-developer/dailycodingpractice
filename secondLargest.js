function SecondLargest(arr){
    let largest = 0;
    let slargest =0;

    for(let i of arr){
        if(i>largest ){
            slargest=largest;
            largest =i;
        }else if (i>slargest && i<largest){
            slargest=i;
        }
    }

    return slargest;
}

let arr =[9,4,6,20,10,8,5];

console.log(SecondLargest(arr));