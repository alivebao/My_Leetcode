var mergeKLists = function(lists) {
    if(!lists || lists.length === 0){
        return null;
    }
    if(lists.length === 1){
        return lists[0];
    }
    var mergeTwoLists = function(l1, l2) {
        var result = {
            val: 0,
            next: null
        };
        var cur = result;
        while(l1 && l2){
            if(l1.val < l2.val){
                cur.next = l1;
                l1 = l1.next;
            }else{
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        while(l1){
            cur.next = l1;
            l1 = l1.next;
            cur = cur.next;
        }
        while(l2){
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }
        return result.next;
    };
	var length = lists.length;
    var mid = Math.floor((length - 1) / 2);
    var l1 = mergeKLists(lists.slice(0, mid + 1));
    var l2 = mergeKLists(lists.slice(mid + 1, length));
    var result = mergeTwoLists(l1, l2);
	/*
    var result = lists[0];
    for(var i = 1 ; i < lists.length; i++){
        result = mergeTwoLists(result, lists[i]);
    }
	*/
    return result;
};