const sumAll = function(firstInput, SecondInput) {
    //Init return var
    //Set smaller and larger values
    //Validate input args
    //Loop from firstInput to secondInput and summate inclusively

    let sum = 0;
    let largerValue;
    let smallerValue;

    if (firstInput >= 0 && Number.isInteger(firstInput) && SecondInput >= 0 && Number.isInteger(SecondInput)){
        if(firstInput > SecondInput){
            largerValue = firstInput;
            smallerValue = SecondInput;
        }else if (SecondInput => firstInput){
            largerValue = SecondInput;
            smallerValue = firstInput;
        }
        for (let i = smallerValue; i <= largerValue; i++) {
            sum += i;
        }
        return sum;
    }else{
        return 'ERROR';
    }
}
// Do not edit below this line
module.exports = sumAll;
