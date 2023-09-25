const sumAll = (firstNumber, secondNumber) => {
    if(
        (typeof firstNumber != "number")  |
        (typeof secondNumber != "number") |
        (firstNumber < 0)                 |
        (secondNumber < 0)){
        return "ERROR";
    }else{
        let summation = 0;
        for(
            i = Math.min(firstNumber, secondNumber); 
            i <= Math.max(firstNumber, secondNumber); 
            i++){
            summation += i;
        }
        return summation;
    }
};

// Do not edit below this line
module.exports = sumAll;
