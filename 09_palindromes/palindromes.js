const palindromes = function (inputStr) {
    inputStr = inputStr.toLowerCase();
    let noNonLetters = inputStr.replaceAll(/\W/ig, '');
    let verifiedStr = noNonLetters.replaceAll(' ', '');
    let reversed = "";
    for (let i = verifiedStr.length; i > 0; i--){
        reversed += verifiedStr.charAt(i - 1);
    }
    console.log(reversed);
    if (reversed === verifiedStr){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
