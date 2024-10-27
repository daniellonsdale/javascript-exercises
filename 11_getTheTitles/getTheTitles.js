const getTheTitles = function(books) {
    let bookArray = [];

    for (i in books){
        bookArray.push(books[i].title);
    }

    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
