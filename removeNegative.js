function RemoveNegative(arr){
    let res=[];
    for(let i of arr){
        if(i >= 0){
            res.push(i);
        }
    } 
    return res;
}
const arr =[4, -2, 7, -5, 3, -1, 8];
const result =RemoveNegative(arr);
console.log(result);