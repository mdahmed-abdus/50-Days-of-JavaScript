const transcription = (dna = '') => {
  const complements = { G: 'C', C: 'G', T: 'A', A: 'U' };
  let rna = '';

  for (let code of dna) {
    rna += complements[code];
  }

  return rna;
};

console.log(transcription('GCT')); // returns 'CGA'
console.log(transcription('GATC')); // returns 'CUAG'
