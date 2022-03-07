function incrementLetters(str) {
  return [...str].reduce(
    (acc, curr) => acc + String.fromCharCode(curr.charCodeAt(0) + 1),
    ""
  );
}
console.log(incrementLetters("aaaba"));

//Autor

// function myFunction(str) {
//   const arr = [...str];
//   const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//   return correctedArray.join('');
// }
