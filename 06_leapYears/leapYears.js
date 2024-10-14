const leapYears = function(year) {
    //Set year argument
    //Test if true for all conditions
    //Return true if yes, false if no

    if (year % 4 === 0){
        if(year % 100 === 0 && year % 400 === 0){
            return true;
        }else if (year % 100 === 0){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
