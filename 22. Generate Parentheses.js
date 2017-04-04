var generateParenthesis = function(n) {
    var result = [];
    var generateFun = function(leftNum, rightNum, s, result){
        if(leftNum === 0 && rightNum === 0){
            result.push(s);
        }
		if(leftNum > rightNum){
			return;
		}
        if(leftNum > 0){
            generateFun(leftNum - 1, rightNum, s + '(', result);
        }
        if(rightNum > 0){
            generateFun(leftNum, rightNum - 1, s + ')', result);
        }
    }
    generateFun(n, n, "", result);
    return result;
};