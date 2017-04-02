var fourSum = function(nums, target) {
    var threeSum = function(arr, tar){
        var res = [];
        for(var i = 0; i < arr.length; i++){
            if(i === 0 || arr[i] != arr[i - 1]){
                var j = i + 1, k = arr.length - 1;
                while(j < k){
                    var sum = arr[i] + arr[j] + arr[k];
                    if(sum < tar){
                        j++;
                    }else if(sum > tar){
                        k--;
                    }else{
                        res.push([arr[i], arr[j], arr[k]]);
                        while(j < k && arr[j] === arr[j + 1]) j++;
                        while(j < k && arr[k] === arr[k + 1]) k--;
                        j++;k--;
                    }
                }
            }
        }
        return res;
    }
    var result = [];
    nums.sort(function(a, b){
        return a - b;
    });
    for(var i = 0; i < nums.length; i++){
		if(i === 0 || nums[i] != nums[i - 1]){
			var t = threeSum(nums.slice(i + 1), target - nums[i]);
			if(t.length !== 0){
				for(var j = 0; j < t.length; j++){
					t[j].push(nums[i]);
					t[j].sort(function(a, b){
						return a - b;
					});
					result.push(t[j]);
				}
			}
		}
    }
    return result;
};