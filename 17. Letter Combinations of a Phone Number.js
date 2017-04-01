var letterCombinations = function(digits) {
    if(!digits || digits.length === 0){
        return [];
    }
    var transArr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var result = [""];
    for(var i = 0; i < digits.length; i++){
        var size = result.length;
        for(var j = 0; j < size; j++){
            var t = result[0];
            result.splice(0, 1);
            for(var k = 0; k < transArr[parseInt(digits[i])].length; k++){
                result.push(t + transArr[parseInt(digits[i])][k]);
            }
        }
    }
    return result;
};