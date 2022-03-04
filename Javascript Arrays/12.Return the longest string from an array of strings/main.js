const longestString = (a) => {
  return a.reduce((acc, cur) => (acc.length <= cur.length ? cur : acc), "");
};
