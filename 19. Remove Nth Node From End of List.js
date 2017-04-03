var removeNthFromEnd = function(head, n) {
    var t = head;
    var len = 0;
    while(t){
        t = t.next;
        len++;
    }
    console.log(len)
    if(len - n === 0)
        return head.next;
    var pre = head;
    var cur = head;
    for(var i = 0; i < len - n; i++){
        pre = cur;
        cur = cur.next;
    }
    pre.next = cur.next;
    return head;
};