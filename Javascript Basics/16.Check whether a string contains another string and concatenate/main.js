const concatenateStrings = (a, b) => {
  if (a.includes(b)) {
    return b.concat(a);
  }
  return a.concat(b);
};

//Autor

// function concatenateStrings(a, b) {
//   return a.indexOf(b) === -1 ? a + b : b + a
// }
