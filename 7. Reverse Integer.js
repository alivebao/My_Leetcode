var reverse = function(x) {
    var s = String(Math.abs(x));
    s = s.split("").reverse().join("");
    var result = parseInt(s);
    if(result > Math.pow(2, 31))
        return 0;
    return x < 0 ? -result : result;
};