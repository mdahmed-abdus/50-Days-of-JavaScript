const totalGrains = input => BigInt(Math.pow(2, 63));

const grainsOn = input => BigInt(Math.pow(2, input - 1));

console.log(`Grains on 5th square: ${grainsOn(7)}`);
console.log(`Total grains upto 5th square: ${totalGrains(7)}`);
