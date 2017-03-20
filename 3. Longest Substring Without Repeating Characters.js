var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    var result = 1;
    var arr = [];
    for(var i = 0 ; i < s.length ; i++){
       if(arr.indexOf(s[i]) == -1) {
           arr.push(s[i]);
       }else{
           result = Math.max(result, arr.length);
           arr.splice(0, arr.indexOf(s[i]) + 1);
           arr.push(s[i]);
       }
    }
    return Math.max(result, arr.length);
};