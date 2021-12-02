const isPangram = input => {
  input = input.toLowerCase();

  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of alphabets) {
    if (!input.includes(letter)) {
      return false;
    }
  }

  return true;
};
