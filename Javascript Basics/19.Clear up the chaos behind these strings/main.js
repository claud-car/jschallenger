const letterChaos = (a, b) => {
  const replace = (x) => x.replace("%", "");
  const first = a[0].toUpperCase() + replace(a).slice(1);
  const second = replace(b).split("").reverse().join("");
  return first.concat(second);
};

// function myFunction(a, b) {
//   const func = x => x.replace('%','');
//   const first = func(a);
//   const second = func(b).split('').reverse().join('');
//   return first.charAt(0).toUpperCase() + first.slice(1) + second;
// }
