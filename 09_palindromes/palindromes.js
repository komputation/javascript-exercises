const palindromes = function (string) {
    allLowerCase = string.toLowerCase();
    noPunctuation = allLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    noWhiteSpace = noPunctuation.replace(/\s/g, '');
    stringArray = noWhiteSpace.split("");
    reversedArray = stringArray.reverse();
    reversedString = reversedArray.join("");

    if(noWhiteSpace === reversedString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
