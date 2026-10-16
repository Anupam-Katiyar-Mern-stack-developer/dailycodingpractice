function hashintwoSum(arr,target){

    const seen={};

    for(let i of arr){
        let current = i;
        let required =target-current;

        if(seen[required]){
            return [required,current];
        }else{
            seen[current]=true;
        }
    }

}

const arr = [4, 6, 10, 3];
const target =13;

console.log(hashintwoSum(arr,target));