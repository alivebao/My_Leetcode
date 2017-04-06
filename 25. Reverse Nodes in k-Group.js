var reverseKGroup = function(head, k) {
    var cur = head;
    var count = 0;
    while(cur && count !== k){
        cur = cur.next;
        count++;
    }
    if(count === k){
        cur = reverseKGroup(cur, k);
        while(count-- > 0){
            var temp = head.next;
            head.next = cur;
            cur = head;
            head = temp;
        }
        head = cur;
    }
    return head;
};