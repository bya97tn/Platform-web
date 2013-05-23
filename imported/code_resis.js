function code() {

	var a = document.getElementById('selection1').selectedIndex;
	var b = document.getElementById('selection2').selectedIndex;
	var c = document.getElementById('selection3').selectedIndex;
	if (c == 7) {
		var r = ((a * 10 + 10 + b) / 10);
	} else {
		var r = ((a * 10 + 10 + b) * Math.pow(10, c));
	}
	if (r < Math.pow(10, 3)) {
	document.getElementById('result').innerHTML ="La résistance est de " + r + " Ohm"+ "  (tolérance " + document.getElementById('selection4').value + ")";
	} else if (r > Math.pow(10, 3) && r <= Math.pow(10, 6)) {
		r /= Math.pow(10, 3);
		document.getElementById('result').innerHTML ="La résistance est de " + r + " Kilos Ohm"+ "  (tolérance " + document.getElementById('selection4').value + ")";
	} else if (r > Math.pow(10, 6) && r <= Math.pow(10, 9)) {
		r /= Math.pow(10, 6);
		document.getElementById('result').innerHTML ="La résistance est de " + r + " Megas Ohm"+ "  (tolérance " + document.getElementById('selection4').value + ")";
	}
}
