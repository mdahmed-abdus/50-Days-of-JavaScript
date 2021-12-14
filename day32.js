function gcd(a, b) {
  const remainder = parseInt(a % b);

  if (remainder === 0) {
    return b;
  }

  return gcd(b, remainder);
}

const a = 2154;
const b = 458;

console.log('The GCD of ' + a + ' ', b + ' is ' + gcd(a, b));
