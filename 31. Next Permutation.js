var nextPermutation = function(nums) {
    function reverse(start, end){
        while(start < end){
            swap(start, end);
            start++;
            end--;
        }
    }
    function swap(i, j){
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    var i = nums.length - 1;
    while(i !== 0 && nums[i - 1] >= nums[i]){
        i--;
    }
    if(i === 0){
        nums.reverse().join("");
        return;
    }
    
    var x = i - 1;
    var y = i;
    while(y !== nums.length && nums[x] < nums[y]){
        y++;
    }
    y--;
    swap(x, y);
    reverse(i, nums.length - 1);
};