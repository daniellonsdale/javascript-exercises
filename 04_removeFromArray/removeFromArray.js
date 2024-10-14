const removeFromArray = function(inputArray, ...rem) {
    let result = [];

    for (const i of inputArray){
        let toRemove = false;
        for (const j of rem){
            if(i === j){
                toRemove = true;
            }
        }
        if (toRemove){
            continue;
        }
        else{
            result.push(i);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
