const timeToMixJuice = name => {
  const menu = {
    'Pure Strawberry Joy': 0.5,
    Energizer: 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  };
  return menu[name] || 2.5;
};

const limesToCut = (wedgesNeeded, limes) => {
  const wedges = { small: 6, medium: 8, large: 10 };

  let count = 0;
  let i = 0;
  while (wedgesNeeded > 0) {
    i %= limes.length;
    wedgesNeeded -= wedges[limes[i]];
    count += 1;
  }

  return --count;
};

const remainingOrders = (timeLeft, orders) => {
  const remaining = [];

  for (let i = 0; i < orders.length; i++) {
    if (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[i]);
    } else {
      remaining.push(orders[i]);
    }
  }

  return remaining;
};

console.log(timeToMixJuice('Tropical Island')); // returns 3
console.log(timeToMixJuice('Berries & Lime')); // returns 2.5
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])); // returns 4
console.log(
  remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])
); // returns ['Green Garden']
