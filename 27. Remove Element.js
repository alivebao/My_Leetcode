var removeElement = function(nums, val) {
    nums.sort(function(a, b){
        return a - b;
    });
    var iBegin = -1, iEnd = -1;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === val){
            iBegin = i;
            break;
        }
    }
    for(iEnd = iBegin; iEnd < nums.length; iEnd++){
        if(nums[iEnd] != val){
            break;
        }
    }
    nums.splice(iBegin, iEnd - iBegin);
    return nums.length;
};