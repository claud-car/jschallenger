const getNthElement = (a, n) => {
  const arr = [];
  for (let i = n - 1; i < a.length; i = i + n) {
    arr.push(a[i]);
  }
  return arr;
};

console.log(getNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));

// function myFunction(a, n) {
//   let rest = [...a];
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//      if (rest.length < n) break;
//      result.push(rest[n - 1]);
//      rest = rest.slice(n);
//   }
//   return result;
// }
