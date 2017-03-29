var threeSum = function(nums) {
    var result = [];
    nums.sort(function(a, b){
        return a - b;
    });
    for(var i = 0; i < nums.length; i++){
        if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])){
            for(var j = i + 1, k = nums.length - 1; j < k;){
                if(nums[i] + nums[j] + nums[k] > 0){
                    k--;
                }else if(nums[i] + nums[j] + nums[k] < 0){
                    j++;
                }else{
                    result.push([nums[i], nums[j], nums[k]]);
                    while(j < k && nums[j] == nums[j + 1]) j++;
                    while(j < k && nums[k] == nums[k + 1]) k--;
                    j++;k--;
                }
            }
        }
    }
    return result;
};