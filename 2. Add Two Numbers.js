var addTwoNumbers = function(l1, l2) {
	var result = [];
	var needPlus = 0;

    while(l1 && l2){
		result.push((l1.val + l2.val + needPlus) % 10);
		needPlus = Math.floor((l1.val + l2.val + needPlus) / 10);
		l1 = l1.next;
		l2 = l2.next;
	}
	while(l1){
		result.push((l1.val + needPlus) % 10);
		needPlus = Math.floor((l1.val + needPlus) / 10);
		l1 = l1.next;
	}
	while(l2){
		result.push((l2.val + needPlus) % 10);
		needPlus = Math.floor((needPlus + l2.val) / 10);
		l2 = l2.next;
	}
	if(needPlus){
	    result.push(needPlus);
	}
	return result;
};