function Hash(arr) {
  const seen = {};
  const duplicates = [];

  for (let i of arr) {
    let current = i;

    if (seen[current]) {
       return current
    } else {
      seen[current] = true;
    }
  }
  
}

const arr = [3, 8, 3, 5, 8, 8, 10];

console.log(Hash(arr));
