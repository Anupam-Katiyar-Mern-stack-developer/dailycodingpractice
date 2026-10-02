function CountUntilZeero(arr){
    let count = 0;

    for(let i of arr){
        if(i != 0){
           
            count =count+1;
        }
        else{
            return count;
        }
    }
   
}

const array = [5, 8, 3, 7, 0, 9, 2];

const result = CountUntilZeero(array);

console.log(result);