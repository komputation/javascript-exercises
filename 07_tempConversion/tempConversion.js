const convertToCelsius = (tempFahrenheit) => {
  celsius = ((tempFahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = (tempCelsius) => {
  fahrenheit = (tempCelsius * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
