function CountDuplicate(arr,target){
    let count = 0;

    for(let i of arr){
        if( i === target){
            count ++;
        }
    }
    return count;
}

let array  = [5, 2, 7, 2, 9, 2, 4];
let target =2;
const result = CountDuplicate(array,target);

console.log(result);