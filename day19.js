const colorCode = color => {
  const codes = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  return codes.indexOf(color.toLowerCase());
};

(() => {
  console.log(colorCode('blue')); // should return 6
  console.log(colorCode('white')); // should return 9
  console.log(colorCode('hehe')); // should return 9
})();
