var twoSum = function(nums, target) {
	var targetMap = new Map();	
	for(var i = 0 ; i < nums.length ; i++){
		if(targetMap.has(nums[i])){
			return [targetMap.get(nums[i]), i]
		}else{
			targetMap.set(target - nums[i], i);
		}
	}
	return [-1, -1];
};