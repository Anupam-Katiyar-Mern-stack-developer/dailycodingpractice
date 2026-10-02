function returnIndexOfTarget(arr,target){

    for(let i = 0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

const arr=[10, 20, 30, 40, 50];
const Target = 40;

const result =returnIndexOfTarget(arr,Target);
console.log(result);