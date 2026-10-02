function CountAfterZeero(arr) {
  let count = 0;
  let check = false;

  for (let i of arr) {
    if (i === 0) {
      check = true;
    } else if (check === true) {
      count++;
    }
  }
  return count;
}

const arr = [5, 8, 0, 4, 7, 2, 9];
const result = CountAfterZeero(arr);

console.log(result);
