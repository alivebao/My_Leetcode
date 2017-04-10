var strStr = function(haystack, needle) {
    if(!haystack && !needle){
        return 0;
    }
    
    for(var i = 0; i < haystack.length - needle.length + 1; i++){
        var j = 0;
        while(j < needle.length){
            if(haystack[i + j] === needle[j]){
                j++;
            }else{
                break;
            }
        }
        if(j === needle.length){
            return i;
        }
    }
    return -1;
};