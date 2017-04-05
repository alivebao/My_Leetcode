var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    var n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
};