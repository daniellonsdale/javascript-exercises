const convertToCelsius = function(fInput) {
  let converted;
  converted = ((fInput - 32)*(5/9));
  let rounded = Math.round((converted * 10)/10);
  return rounded;
};

const convertToFahrenheit = function(cInput) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
