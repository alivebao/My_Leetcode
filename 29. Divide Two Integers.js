var divide = function(dividend, divisor) {
    var t = 0;
    var minus = true;
    if((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)){
        minus = false;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    var getPositiveDivideResult = function(d1, d2){
        if(d1 < d2){
            return 0;
        }
        var ori = d2;
        var t = 1;
        while(d1 > d2 * 2){
            d2 *= 2;
            t *= 2;
        }
        return t + getPositiveDivideResult(d1 - d2, ori);
    }
    var result = getPositiveDivideResult(dividend, divisor);
    result = minus ? -result : result;
    return result > 2147483647 ? 2147483647 : result;
};