const GroupFirstLetter = (arr) => {
  return arr.reduce((acc, cur) => {
    const array = cur[0].toLowerCase();
    return { ...acc, [array]: [...(acc[array] || []), cur] };
  }, {});
};

//console.log(GroupFirstLetter(['Berlin', 'Haris', 'Prague']));
