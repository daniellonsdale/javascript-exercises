const fibonacci = function(num) {
    let arr = [];
    if(num < 0){
        return "OOPS";
    }
    if(num == 0){
        return 0;
    }
    for (let i = 0; i < num; i++){
        if(i === 0 || i === 1){
            arr[i] = 1;
        }else{
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
