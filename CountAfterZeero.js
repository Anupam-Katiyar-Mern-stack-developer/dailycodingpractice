

function countAfterZeero (arr){

  let check =false;
  let count =0;

  for(let i of arr){
    if(i ===0 ){
      check =true;
    }
    else if(check ===true){
      count++;
    }
  }
  return count;
}

const arr =[6,5 ,3 ,0, 4,9,10];

let result = countAfterZeero(arr);
console.log(result);