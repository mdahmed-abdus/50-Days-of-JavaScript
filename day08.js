const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  const date1 = Date.parse(dateText1);
  const date2 = Date.parse(dateText2);
  return (date2 - date1) / DAY_IN_MILLISECONDS;
}

console.log(
  `Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`
);
