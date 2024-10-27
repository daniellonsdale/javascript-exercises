const findTheOldest = function(people) {
    const CURRENTYEAR = new Date().getFullYear();
    let oldest = people[0];
    let ages = [];
    let curOldestAge  = 0;

    for (i in people){
        if(Object.hasOwn(people[i], 'yearOfDeath')){
            ages[i] = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else{
            ages[i] = CURRENTYEAR - people[i].yearOfBirth;
        }

        if (ages[i] > curOldestAge){
            oldest = people[i];
            curOldestAge = ages[i];
        }
    }


    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
