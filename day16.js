function hey(message) {
  const isUpperCase = message === message.toUpperCase();
  const isQuestion = message.endsWith('?');

  if (isQuestion) {
    if (isUpperCase) {
      return "Calm down, I know what I'm doing!";
    }
    return 'Sure.';
  }

  if (isUpperCase) {
    return 'Whoa, chill out!';
  }

  if (message.length === 0) {
    return 'Fine. Be that way!';
  }

  return 'Whatever.';
}
