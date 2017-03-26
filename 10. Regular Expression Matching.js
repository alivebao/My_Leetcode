var isMatch = function(s, p) {
	var result = [];
	for(var i = 0 ; i < s.length + 1; i++){
	    result[i] = [];
	}
	for(var i = 0; i < s.length + 1 ; i++){		
	    for(var j = 0; j < p.length + 1 ; j++){
	        result[i][j] = false;
		}
	}
	        
	result[0][0] = true;
	
	for(var i = 0; i < p.length; i++){
		if(p[i] == '*'){
			result[0][i + 1] = result[0][i] || result[0][i - 1];
		}
	}
	for(var i = 1 ; i < result.length; i++){
		for(var j = 1 ; j < result[0].length; j++){
			if(s[i - 1] == p[j - 1] || p[j - 1] == '.'){
				result[i][j] = result[i - 1][j - 1];
			}
			if(p[j - 1] == '*'){
				//'*' can never at the begin of p, so j must > 2
				if(p[j - 2] != s[i - 1] && p[j - 2] != '.'){
					result[i][j] = result[i][j - 2];
				}else{
					result[i][j] = result[i - 1][j] || result[i][j - 1] || result[i][j - 2];
				}
			}
		}
	}
	return result[s.length][p.length];
};