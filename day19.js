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

console.log(colorCode('blue')); // returns 6
console.log(colorCode('white')); // returns 9
console.log(colorCode('hehe')); // returns -1
