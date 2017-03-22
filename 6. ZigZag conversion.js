var convert = function(s, numRows) {
    var result = "";
    if(s.length === 0 || numRows === 1){
        return s;
    }
    for(var i = 0 ; i < numRows ; i++){
        for(var j = i; j < s.length; j += 2 * (numRows - 1)){
            result += s[j];
            if(i !== 0 && i !== numRows - 1){
                var t = j + 2 * (numRows - i - 1);
                if(t < s.length){
                    result += s[t];
                }
            }
        }
    }
    return result;
};