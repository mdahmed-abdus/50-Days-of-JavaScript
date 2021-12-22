function openOrSenior(data) {
  const categories = [];

  for (const member of data) {
    if (member[0] >= 55 && member[1] >= 7) {
      categories.push('Senior');
    } else {
      categories.push('Open');
    }
  }

  return categories;
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
