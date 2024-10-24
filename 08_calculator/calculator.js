const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length == 0){
    return 0;
  }
	return arr.reduce((acu, cur) => acu += cur);
};

const multiply = function(arr) {
  if(arr.length == 0){
    return 0;
  }
  return arr.reduce((acu, cur) => acu *= cur);
};

const power = function(base, expo) {
  let acu = base;
	for(let i = 1; i < expo; i++){
    acu *= base;
  }
  return acu;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
