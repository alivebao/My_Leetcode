var threeSumClosest = function(nums, target) {
    var minDistance = 9999;
    var result = 9999;
    nums.sort(function(a, b){
        return a - b;
    });
    for(var i = 0 ; i < nums.length; i++){
        if(i === 0 || nums[i] !== nums[i - 1]){
            var j = i + 1, k = nums.length - 1;
            while(j < k){
                var sum = nums[i] + nums[j] + nums[k];
                if(sum < target){
                    if(Math.abs(sum - target) < minDistance){
                        minDistance = Math.abs(sum - target);
                        result = sum;
                    }
                    j++;
                }else if(sum > target){
                    if(Math.abs(sum - target) < minDistance){
                        minDistance = Math.abs(sum - target);
                        result = sum;
                    }
                    k--;
                }else{
                    return target;
                }
            }
        }
    }
    return result;
};