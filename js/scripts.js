function drawTree(Treeheight) {
	for(var i=1; i<=Treeheight; i++) {
		var star = ' ';
		
		for(var j=1; j<=i; j++){
			star += '*';
		}
		console.log(star);
	}
}

drawTree(10);