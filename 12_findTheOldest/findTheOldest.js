const findTheOldest = function(peopleObj) {
    const objArr = [];
    let age = 0;

    peopleObj.forEach(element => {
        if(element.hasOwnProperty("yearOfDeath")){
            age = element.yearOfDeath - element.yearOfBirth;
        }else{
            age = new Date().getFullYear() - element.yearOfBirth;
        }
        objArr.push({
            name: element.name,
            age: age
        });
    });

    objArr.sort((a, b) => {
        return b.age - a.age;
    });

    oldestObjArr = peopleObj.filter((element) => {
        return element.name === objArr[0].name;
    });

    oldestObj = oldestObjArr[0]

    return oldestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
