const needsLicense = kind => {
  const kinds = ['car', 'truck'];
  for (const k of kinds) {
    if (k === kind) {
      return true;
    }
  }
  return false;
};

const chooseVehicle = (option1, option2) => {
  const chosen = option1.localeCompare(option2) < 0 ? option1 : option2;
  return chosen + ' is clearly the better choice.';
};

const calculateResellPrice = (originalPrice, age) => {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age <= 10) {
    return originalPrice * 0.7;
  } else {
    return originalPrice * 0.5;
  }
};

console.log(needsLicense('car')); // returns true
console.log(needsLicense('bike')); // returns false
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla')); // returns 'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf')); // returns 'Volkswagen Beetle is clearly the better choice.'
console.log(calculateResellPrice(1000, 1)); // returns 800
console.log(calculateResellPrice(1000, 5)); // returns 700
console.log(calculateResellPrice(1000, 15)); // returns 500
