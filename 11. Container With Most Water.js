var maxArea = function(height) {
    var maxSize = (height.length - 1) * Math.min(height[0], height[height.length - 1]);
    for(var i = 0 , j = height.length - 1; i < j ;){
        if(height[i] > height[j]){
            j--;
        }else{
            i++;
        }
        maxSize = Math.max(maxSize, (j - i) * Math.min(height[i], height[j]));
    }
    return maxSize;
};