(function() {

	var
	columns = 12,
	one = (100/columns),
	two = (one*2),
	three = (one*3),
	four = (one*4),
	five = (one*5),
	six = (one*6),
	seven = (one*7),
	eight = (one*8),
	nine = (one*9),
	ten = (one*10),
	eleven = (one*11),
	twelve = (one*12),
	cols = [["one", one], ["two", two], ["three", three], ["four", four], ["five", five], ["six", six], ["seven", seven], ["eight", eight], ["nine", nine], ["ten", ten], ["eleven", eleven], ["twelve", twelve]],
	colsCount = cols.length,
	css = [],
	cssNode = document.getElementById("dynamic");

	for(var i=0;i<colsCount;i++) {
		console.log(cols[i][0], cols[i][1]);
		css.push(".col-" + cols[i][0] + " {width:" + cols[i][1] + "%}");
	};

	css = css.join("\n");
	//cssNode.innerHTML = css;
	//console.log(css);
	
})();