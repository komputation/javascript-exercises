const removeFromArray = (arrToBeRemoved, ...removeList) => {
    let finalArr = [];
    arrToBeRemoved.forEach(element => {
        if(removeList.includes(element)){
            // pass
        }else{
            finalArr.push(element);
        }
    });
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
