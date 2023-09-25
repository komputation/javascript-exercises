const getTheTitles = function(bookObj) {
    let titleArr = [];
    bookObj.forEach(element => {
        const { title } = element;
        titleArr.push(title);
    });
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
