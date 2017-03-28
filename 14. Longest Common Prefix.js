var longestCommonPrefix = function(strs) {
    var sortedStrs = strs.sort();
    if(strs.length === 0){
        return "";
    }
    var result = "";
    for(var i = 0 ; i < sortedStrs[0].length; i++){
        if(sortedStrs[0][i] == sortedStrs[sortedStrs.length - 1][i]){
            result += sortedStrs[0][i];
        }else{
            return result;
        }
    }
    return result;
};