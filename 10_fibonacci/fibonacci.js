const fibonacci = function(nthSequence) {
    nthSequence = parseInt(nthSequence);
    if(nthSequence < 0){
        return "OOPS";
    }

    if(nthSequence == 1){
        return 1;
    }
    
    let nth;
    let nMinOne = 1;
    let nMinTwo = 0;

    if(nthSequence == 0) return nMinTwo;

    for(i = 2; i <= nthSequence; i++){
        nth =  nMinOne + nMinTwo;
        nMinTwo = nMinOne;
        nMinOne = nth;
    }
    return nth;
};

// Do not edit below this line
module.exports = fibonacci;
