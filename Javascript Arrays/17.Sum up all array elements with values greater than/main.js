const sumUpSpecific = (a, b) => {
  return a.reduce((acc, cur) => acc + (cur > b ? cur : 0), 0);
};

//console.log(sumUpSpecific([1, 2, 3, 4, 5, 6, 7], 2))

// function myFunction(a, b) {
//   return a.reduce((sum, cur) => {
//     if (cur > b) return sum + cur;
//     return sum;
//   }, 0);
// }
