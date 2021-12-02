const spaceAge = seconds => {
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  };

  const getYear = orbitalPeriod =>
    parseFloat((seconds / (31557600 * orbitalPeriod)).toFixed(2));

  yearsInAllPlanets.Mercury = getYear(0.2408467);
  yearsInAllPlanets.Venus = getYear(0.61519726);
  yearsInAllPlanets.Earth = getYear(1);
  yearsInAllPlanets.Mars = getYear(1.8808158);
  yearsInAllPlanets.Jupiter = getYear(11.862615);
  yearsInAllPlanets.Saturn = getYear(29.447498);
  yearsInAllPlanets.Uranus = getYear(84.016846);
  yearsInAllPlanets.Neptune = getYear(164.79132);

  return yearsInAllPlanets;
};

console.log(spaceAge(Math.round(Math.random() * 99999999)));
