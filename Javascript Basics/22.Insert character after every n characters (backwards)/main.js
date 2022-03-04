const insertCharacters = (a, b) => {
  let str = a;
  const char = b;
  const insertValue = 3;
  str = str.split("").reverse().join("");
  const regex = new RegExp(".{1," + insertValue + "}", "g");
  str = str.match(regex).join(char);
  str = str.split("").reverse().join("");
  return str;
};

// function myFunction(a, b) {
//   let result = [];
//   let rest = a;
//   while (rest.length) {
//     result.push(rest.slice(-3));
//     rest = rest.slice(0, -3);
//   }
//   return result.reverse().join(b);
// }

//console.log(insertCharacters("1234567", "."));
