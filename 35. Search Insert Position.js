var searchInsert = function(nums, target) {
    if(nums[0] >= target){
        return 0;
    }
    if(nums[nums.length - 1] < target){
        return nums.length;
    }
    function findIndex(arr, iBegin, iEnd, tar){
        var iMid = Math.floor((iBegin + iEnd) / 2);
        if(arr[iMid] === tar){
            return iMid;
        }
        else if(iMid + 1 < arr.length && arr[iMid] < tar && arr[iMid + 1] > tar)
            return iMid + 1;
        else if(iMid - 1 >= 0 && arr[iMid] > tar && arr[iMid - 1] < tar){
            return iMid;
        }
        else if(arr[iMid] > tar){
            return findIndex(arr, iBegin, iMid, tar);
        }else{
            return findIndex(arr, iMid + 1, iEnd, tar);
        }
    }
    return findIndex(nums, 0, nums.length, target);
};