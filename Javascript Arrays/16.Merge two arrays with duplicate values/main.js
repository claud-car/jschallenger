const mergeArrayDuplicate = (a, b) => {
  let array = a.concat(b);
  array = array.filter((item, i) => {
    return array.indexOf(item) === i;
  });
  return array.sort((a, b) => a - b);
};

//Autor

// function myFunction(a, b) {
//   return [...new Set([...a, ...b])].sort((x, y) => x - y);
// }
