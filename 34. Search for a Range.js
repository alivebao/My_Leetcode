var searchRange = function(nums, target) {
    function findIndex(arr, iBegin, iEnd, tar){
        if(iBegin > iEnd){
            return -1;
        }
        if(iBegin === iEnd){
            if(arr[iBegin] === tar){
                return iBegin;
            }else{
                return -1;
            }
        }
        var iMid = Math.floor((iBegin + iEnd) / 2);
        if(arr[iMid] === tar){
            return iMid;
        }else if(arr[iMid] > tar){
            return findIndex(arr, iBegin, iMid, tar);
        }else{
            return findIndex(arr, iMid + 1, iEnd, tar);
        }
    }
    var t = findIndex(nums, 0, nums.length, target);
    if(t === -1){
        return [-1, -1];
    }
    var iLeft = t, iRight = t;
    while(iLeft !== 0 && nums[iLeft] === target){
        iLeft--;
    }
    while(iRight !== nums.length && nums[iRight] === target){
        iRight++;
    }
    nums[iLeft] !== target ? iLeft++ : "";
    nums[iRight] !== target ? --iRight : "";
    return [iLeft, iRight];
};