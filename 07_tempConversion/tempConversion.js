const convertToCelsius = function(x) {
  return Math.round((x-32)*5*10/9)/10;
};

const convertToFahrenheit = function(x) {
  return Math.round((9*x/5 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
