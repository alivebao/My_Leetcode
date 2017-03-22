var longestPalindrome = function(s) {
    var maxLen = 1;
    var result = s[0];
    for(var i = 0 ; i < s.length ; i++){
        var tempLen = 1;
        var a = i - 1, b = i + 1;
        while(a >= 0 && b < s.length && s[a] == s[b]){
            tempLen += 2;
            if(tempLen > maxLen){
                maxLen = tempLen;
                result = s.slice(a, b + 1);
            }
            a--;b++;
        }
    }
    
    for(var j = 0 ; j < s.length ; j ++){
        var temp = 1;
        var x = j, y = j + 1;
        while(x >= 0 && y < s.length && s[x] == s[y]){
            temp += 2;
            if(temp > maxLen){
                maxLen = temp;
                result = s.slice(x, y + 1);
            }
            x--;y++;
        }
    }
    
    return result;
};