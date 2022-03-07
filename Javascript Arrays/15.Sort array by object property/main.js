const sortObjectProperty = (arr) => {
  return arr.sort((a, b) => (a.b > b.b ? 1 : b.b > a.b ? -1 : 0));
};

//console.log(a([{a:2,b:10},{a:5,b:4}]));

//Autor

// function myFunction(arr) {
//   const sort = (x, y) => x.b - y.b;
//   return arr.sort(sort);
// }
