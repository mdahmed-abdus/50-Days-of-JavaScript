function convertTo24HrsFormat(time) {
  time = time.split(':');

  let minuteEndIndex = time[1].indexOf('A');
  if (minuteEndIndex === -1) {
    minuteEndIndex = time[1].indexOf('P');
  }

  let hours = time[0];
  let minutes = time[1].slice(0, minuteEndIndex);
  const isPM = time[1].endsWith('PM');

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (hours === '12') {
    hours = '00';
  }
  if (isPM) {
    hours = parseInt(hours) + 12;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

const times = ['12:10AM', '5:00AM', '12:33PM', '01:59PM', '11:8PM', '10:02PM'];
for (const time of times) {
  console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
}
