var removeDuplicates = function(nums) {
    var count = 0;
    if(!nums || nums.length === 0){
        return count;
    }
    count =  nums.length;
    for(var i = 1 ; i < nums.length;){
        if(nums[i - 1] === nums[i]){
            nums.splice(i, 1);
            count--;
        }else{
            i++;
        }
    }
    return count;
};