const arrayConditional = (arr, num) => {
  return [...(num > 5 ? [num] : [0]), ...arr];
};

// function arrayConditional(arr, num) {
//   arr.unshift(num < 6 ? 0 : num)
//   return arr
//   //return [n < 6 ? 0 : n, ...a];
// }

//console.log(arrayConditional([1,2,3], 5));
