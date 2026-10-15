function CountAverage(arr) {
  let count = 0;
  let sum = 0;
  let avg = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }

  return count;
}

const arr = [4, 8, 2, 10, 6];

console.log(CountAverage(arr));
