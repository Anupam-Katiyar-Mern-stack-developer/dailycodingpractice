function checkDifference(arr) {
  let result = [];
  let avg = 0;
  let sum = 0;

  for (let i of arr) {
    sum += i;
  }

  avg = sum / arr.length;
  let maxDiffrence = 0;
  let ele =0;
  for (let i of arr) {
    let value = Math.abs(i - avg);
    if (maxDiffrence < value) {
      maxDiffrence = value;
      ele =i;
    }
  }

  return ele;
}

let arr = [4, 7, 2, 9, 7, 5];

console.log(checkDifference(arr));

// console.log(Math.abs(-2));
