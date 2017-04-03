var isValid = function(s) {
    var inputStr = '([{';
    var outputStr = ')]}';
    var checkArr = [];
    for(var i = 0; i < s.length; i++){
        if(inputStr.indexOf(s[i]) !== -1){
            checkArr.push(s[i]);
        }else{
            if(inputStr.indexOf(checkArr[checkArr.length - 1]) === outputStr.indexOf(s[i])){
                checkArr.pop();
            }else{
                return false;
            }
        } 
    }
    return checkArr.length === 0;
};