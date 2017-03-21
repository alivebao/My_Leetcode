var findMedianSortedArrays = function(nums1, nums2) {
    function getKth(a, b, k){
        if(a.length > b.length){
            return getKth(b, a, k);
        }
        if(a.length === 0){
            return b[k - 1];
        }
        if(k === 1){
            return Math.min(a[0], b[0]);
        }
        var pa = Math.min(k >> 1, a.length), pb = k - pa;
        if(a[pa - 1] < b[pb - 1]){
            return getKth(a.slice(pa), b, k - pa)
        }else if(a[pa - 1] > b[pb - 1]){
            return getKth(a, b.slice(pb), k - pb);
        }
        return a[pa - 1];
    }
    
    var t = nums1.length + nums2.length;
	var x = Math.floor(t / 2);
    if(t % 2 === 1){
        return getKth(nums1, nums2, x + 1);
    }else{
        return (getKth(nums1, nums2, x) + getKth(nums1, nums2, x + 1)) / 2
    }
};