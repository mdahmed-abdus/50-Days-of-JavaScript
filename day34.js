function mostFreq(arr) {
  const freqs = {};

  arr.forEach(element => {
    let alreadyAdded = false;

    for (const key in freqs) {
      if ('' + element === key) {
        freqs[key] = freqs[key] + 1;
        alreadyAdded = true;
        break;
      }
    }

    if (!alreadyAdded) {
      freqs[element] = 1;
    }
  });

  let maxFreqKey = Object.keys(freqs)[0];
  let maxFreq = freqs[maxFreqKey];

  for (const key in freqs) {
    if (freqs[key] > maxFreq) {
      maxFreq = freqs[key];
      maxFreqKey = key;
    }
  }

  return maxFreqKey + ' ' + maxFreq;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq([1, 2, 2, 4, 5, 6, 6])); // returns 2 2
console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // returns a 5
