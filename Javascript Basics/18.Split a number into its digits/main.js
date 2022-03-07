function splitNumber(a) {
  const numberToSplit = a.toString().split("");
  const newArray = numberToSplit.map(Number);
  return newArray;
}

//Autor

// function myFunction( a ) {
//   const string = a + '';
//   const strings = string.split('');
//   return strings.map(digit => Number(digit))
// }
