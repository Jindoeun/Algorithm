function findOddInt(n) {
	var count = 0;

	n.filter(function(item, pos) {
		if(n.indexOf(item) == pos && (item.length) % 2 != 0){
			count = item;
		}
		console.log(item.length);
	});
	
	console.log(count);
	return count;
}

findOddInt([2, 2, 2, 3, 2]);