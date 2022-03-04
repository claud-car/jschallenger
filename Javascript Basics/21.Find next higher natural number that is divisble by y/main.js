const nextDivisibleNumber = (x, y) => {
  // find the quotient
  const quotient = ~~(x / y);
  //const quotient = Math.floor(x / y);

  // ~~ It is used as a faster substitute
  // for Math.floor() for positive numbers.
  // It does not return the same result
  // as Math.floor() for negative numbers,
  // as it just chops off the part after the
  // decimal (see other answers for examples
  // of this).

  // 1st possible closest number
  const closestNumber = y * quotient;
  // 2nd possible closest number
  const nextNumber = x * y > 0 ? y * (quotient + 1) : y * (quotient - 1);

  return x > closestNumber ? nextNumber : closestNumber;
};

console.log(nextDivisibleNumber(-5, 7));

// function myFunction(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }
