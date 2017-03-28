var romanToInt = function(s) {
    function getNum(c){
        switch(c) {  
                case 'I': return 1;   
                case 'V': return 5;  
                case 'X': return 10;  
                case 'L': return 50;  
                case 'C': return 100;  
                case 'D': return 500;  
                case 'M': return 1000;  
                default: return 0;  
            }
    }
    
    var result = getNum(s[0]);
    for(var i = 1; i < s.length; i++){
        var pre = getNum(s[i - 1]);
        var cur = getNum(s[i]);
        if(cur <= pre){
            result += cur;
        }else{
            result += cur - 2 * pre;
        }
    }
    return result;    
};