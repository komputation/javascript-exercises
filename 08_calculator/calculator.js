const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(arr) {
	let summation = 0;
  arr.forEach(element => {
    summation += element;
  });
  return summation;
};

const multiply = function(arr) {
  let multiplication = 1;
  arr.forEach(element => {
    multiplication *= element;
  });
  return multiplication;
};

const power = function(firstNumber, secondNumber) {
	return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number, result = 1) {
	if(number == 0){
    return 1;
  }else{
    if(number == 1){
      return result;
    }else{
      return factorial(number - 1, result * number);
    }
  }
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
