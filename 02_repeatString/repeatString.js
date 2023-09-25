const repeatString = (string, num) => {
    let stringPlaceholder = '';
    if(num < 0){
        stringPlaceholder = 'ERROR';
        return stringPlaceholder;
    }else{
        for(i = 0; i < num; i++){
            stringPlaceholder = stringPlaceholder.concat(string);
        }
        return stringPlaceholder;
    }
};

// Do not edit below this line
module.exports = repeatString;
