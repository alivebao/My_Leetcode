var search = function(nums, target) {
    if(!nums || nums.length === 0){
        return -1;
    }
    var rotateIndex = -1;
    for(var i = 1; i < nums.length; i++){
        if(nums[i - 1] > nums[i]){
            rotateIndex = i - 1;
            break;
        }
    }
    function getIndexinOrderArr(arr, iBegin, iEnd, tar){
        if(iBegin > iEnd){
            return -1;
        }
        if(iBegin == iEnd){
            if(arr[iBegin] == tar){
                return iBegin;
            }else{
                return -1;
            }
        }
        var iMid = Math.floor((iBegin + iEnd) / 2);
		if(arr[iMid] == tar){
			return iMid;
		}
        else if(arr[iMid] > tar){
            return getIndexinOrderArr(arr, iBegin, iMid, tar);
        }else if(arr[iMid] < tar){
            return getIndexinOrderArr(arr, iMid + 1, iEnd, tar);
        }
    }
    
    var iLeft = getIndexinOrderArr(nums, 0, rotateIndex + 1, target);
    var iRight = getIndexinOrderArr(nums, rotateIndex + 1, nums.length, target);
    
    if(iLeft == -1 && iRight == -1){
        return -1;
    }else{
        return iLeft == -1 ? iRight : iLeft;
    }
};