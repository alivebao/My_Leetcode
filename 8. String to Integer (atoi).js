var myAtoi = function(str) {
    if(!str || isNaN(parseInt(str))){
        return 0;
    }
    if(parseInt(str) > 2147483647){
        return 2147483647;
    }
    if(parseInt(str) < -2147483648){
        return -2147483648;
    }
    return parseInt(str);
};