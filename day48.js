function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }

  const years = Math.floor(seconds / 31536000);
  const days = Math.floor((seconds % 31536000) / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  let formattedTime = '';
  if (years) {
    formattedTime += years + ' ';
    formattedTime += years > 1 ? 'years, ' : 'year, ';
  }

  if (days) {
    time += days + ' ';
    time += days > 1 ? 'days, ' : 'day';
  }

  if (hours) {
    formattedTime += hours + ' ';
    formattedTime += hours > 1 ? 'hours, ' : 'hour, ';
  }

  if (minutes) {
    formattedTime += minutes + ' ';
    formattedTime += minutes > 1 ? 'minutes and ' : 'minute and ';
  }

  if (seconds) {
    formattedTime += seconds + ' ';
    formattedTime += seconds > 1 ? 'seconds' : 'second';
  }

  return formattedTime;
}

console.log(formatDuration(1)); // returns "1 second"
console.log(formatDuration(3662)); // returns "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(62)); // returns "1 minute and 2 seconds"
