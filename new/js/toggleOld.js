$(document).ready(function() {
	lenta(lentosDydis);
	$("body").on("keydown", function(event) {
		clickas(event);
	});
	$(".change").on("click", function() {
		changeObject();
	})
	$(".restart").on("click", function() {
		restart();
	})
	//drawLine();
	//forever();
});

function restart() {
	$("tr").remove();
	lenta(lentosDydis);
	drawLine();
	score: 0;
	refreshScore();
	count = 0;
	x = 0;
	xt = 0;
}

function forever() {
	setTimeout(function() {
		moveDown();
	}, 700);
	fillCheck();
	refreshScore();
	setTimeout(function() {
		forever();
	}, 700);
}
var lentosDydis = 10;
var currentObject = [];
var figura;
var tempScore = 0;
var score = 0;
var klase = 0;

function lenta(ilgis) {
	m = [];
	var lentele = $("table");
	for (i = 0; i < ilgis; i++) {
		var c = [];
		ntr = $("<tr>")
		for (j = 0; j < ilgis; j++) {
			c[j] = "";
			$("<td>").appendTo(ntr);
		}
		m[i] = c;
		lentele.append(ntr);
	}
}

function kordinate(eilute, stulpelis) {
	this.eilute = eilute;
	this.stulpelis = stulpelis;
}

function drawCube() {
	figura = "kubas";
	for (g = 0; g < 2; g++) {
		for (i = 4; i < 6; i++) {
			if ($("tr").eq(g).children().eq(i).text() != "") {
				count++;
				randomas();
				console.log("netelpa nauja figura");
				return;
			};
		};
	};
	for (j = 0; j < 2; j++) {
		for (i = 4; i < 6; i++) {
			$("tr").eq(j).children().eq(i).text("X");
			$("tr").eq(j).children().eq(i).addClass("cube");
			currentObject.push(new kordinate(j, i));
			m[j][i] = "X";
		}
	}
};

function drawLine() {
	figura = "linija";
	for (i = 3; i < 7; i++) {
		if ($("tr").eq(0).children().eq(i).text() != "") {
			count++;
			randomas();
			console.log("netelpa nauja figura");
			return;
		};
	};
	for (i = 3; i < 7; i++) {
		$("tr").eq(0).children().eq(i).text("X");
		$("tr").eq(0).children().eq(i).addClass("line");
		currentObject.push(new kordinate(0, i));
		m[0][i] = "X";
	};
};

function drawColum() {
	figura = "stulpelis";
	for (i = 0; i < 4; i++) {
		if ($("tr").eq(i).children().eq(4).text() != "") {
			console.log("netelpa nauja figura");
			count++;
			randomas();
			return;
		};
	};
	for (i = 0; i < 4; i++) {
		$("tr").eq(i).children().eq(4).text("X")
		$("tr").eq(i).children().eq(4).addClass("colum");
		currentObject.push(new kordinate(i, 4));
		m[i][4] = "X";
	};
};

function moveDown() {
	if (checkasBot()) {
		return
	};
	for (i = currentObject.length - 1; i >= 0; i--) {
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		if (currentObject[i].eilute == lentosDydis - 1 || currentObject[i].eilute + currentObject[i].lastCheckEilute == lentosDydis) {
			console.log("ribos");
			currentObject = [];
			randomas();
			return;
		}		
		$("tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $("tr").eq(eilute).children().eq(stulpelis).attr('class');
		$("tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis;
		currentObject[i].eilute = eilute + 1;
		$("tr").eq(eilute + 1).children().eq(stulpelis).text("X");
		$("tr").eq(eilute + 1).children().eq(stulpelis).addClass(klase);
		m[eilute + 1][stulpelis] = "X";
	}
}

function moveLeft() {
	if (checkasXL()) {
		return console.log("trukdo figura kaireja checkas")
	}; 
	for (i = 0; i < currentObject.length; i++) {
		if (currentObject[i].stulpelis == 0) {
			
			return console.log("ribos");
		}
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$("tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $("tr").eq(eilute).children().eq(stulpelis).attr('class');
		$("tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis - 1;
		currentObject[i].eilute = eilute;
		$("tr").eq(eilute).children().eq(stulpelis - 1).text("X");
		$("tr").eq(eilute).children().eq(stulpelis - 1).addClass(klase);
		m[eilute][stulpelis - 1] = "X";
	}
}

function moveRight() {
	if (checkasXR()) {
		return console.log("trukdo figura desineje checkas")
	}
	for (i = currentObject.length - 1; i >= 0; i--) {
		if (currentObject[i].stulpelis == lentosDydis - 1) {
			
			return console.log("ribos");
		}
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$("tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $("tr").eq(eilute).children().eq(stulpelis).attr('class');
		$("tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis + 1;
		currentObject[i].eilute = eilute;
		$("tr").eq(eilute).children().eq(stulpelis + 1).text("X");
		$("tr").eq(eilute).children().eq(stulpelis + 1).addClass(klase);
		m[eilute][stulpelis + 1] = "X";
	}
}


function checkas() {
	if (figura == "linija") {
		for (i = currentObject.length - 1; i >= 0; i--) {
			var stulpelis = currentObject[i].stulpelis;
			var eilute = currentObject[i].eilute;
			if ($("tr").eq(eilute + 1).children().eq(stulpelis).text() != "") {
				console.log("nauja figura");
				currentObject = [];
				randomas();
				return true;
			}
		}
	};
	if (figura == "stulpelis") {
		var stulpelis = currentObject[currentObject.length - 1].stulpelis;
		var eilute = currentObject[currentObject.length - 1].eilute;
		if ($("tr").eq(eilute + 1).children().eq(stulpelis).text() != "") {
			console.log("nauja figura");
			currentObject = [];
			randomas();
			return true;
		}
	};
	if (figura == "kubas") {
		for (i = 1; i < 3; i++) {
			var stulpelis = currentObject[currentObject.length - i].stulpelis;
			var eilute = currentObject[currentObject.length - i].eilute;
			if ($("tr").eq(eilute + 1).children().eq(stulpelis).text() != "") {
				console.log("nauja figura");
				currentObject = [];
				randomas();
				return true;
			}
		}
	};
};

function checkasLeftSide() {
	if (figura == "stulpelis") {
		for (i = currentObject.length - 1; i >= 0; i--) {
			var stulpelis = currentObject[i].stulpelis;
			var eilute = currentObject[i].eilute;
			if ($("tr").eq(eilute).children().eq(stulpelis - 1).text() != "") {
				console.log("error");
				return true;
			}
		}
	};
	if (figura == "linija") {
		var stulpelis = currentObject[0].stulpelis;
		var eilute = currentObject[0].eilute;
		if ($("tr").eq(eilute).children().eq(stulpelis - 1).text() != "") {
			console.log("error");
			return true;
		}
	};
	if (figura == "kubas") {
		for (i = 0; i < currentObject.length; i++) {
			if (i == 1 || i == 3) {
				continue;
			}
			var stulpelis = currentObject[i].stulpelis;
			var eilute = currentObject[i].eilute;
			if ($("tr").eq(eilute).children().eq(stulpelis - 1).text() != "") {
				console.log("error");
				return true;
			}
		}
	};
}

function checkasRightSide() {
	if (figura == "stulpelis") {
		for (i = currentObject.length - 1; i >= 0; i--) {
			var stulpelis = currentObject[i].stulpelis;
			var eilute = currentObject[i].eilute;
			if ($("tr").eq(eilute).children().eq(stulpelis + 1).text() != "") {
				console.log("error");
				return true;
			}
		}
	};
	if (figura == "linija") {
		var stulpelis = currentObject[3].stulpelis;
		var eilute = currentObject[3].eilute;
		if ($("tr").eq(eilute).children().eq(stulpelis + 1).text() != "") {
			console.log("error");
			return true;
		}
	};
	if (figura == "kubas") {
		for (i = currentObject.length - 1; i >= 1; i--) {
			if (i == 2) {
				continue;
			}
			var stulpelis = currentObject[i].stulpelis;
			var eilute = currentObject[i].eilute;
			if ($("tr").eq(eilute).children().eq(stulpelis + 1).text() != "") {
				console.log("error");
				return true;
			}
		}
	};
};

function clickas(event) {
	if (event.keyCode == 39) { //right
		moveRight();
	} else if (event.keyCode == 37) { //left
		moveLeft();
	} else if (event.keyCode == 38) { //top
		console.log("a");
	} else if (event.keyCode == 40) { //down
		moveDown();
		fillCheck();
		refreshScore();
	}
	else if (event.keyCode == 13) { //enter
		changeObject();
	}
}

function refreshScore() {
	$("span").text("Score: " + score);
}
var figuros = [
	function() {
		trikampis();
	},
	function() {
		linija();
	},
	function() {
		linija();
	},
];
var count = 0;
var x = 0;
var xt = 0;

function randomas() {
	if (count == figuros.length) {
		return alert("game over you scored: " + score);
	}
	xt = Math.floor(Math.random() * 3);
	if (xt == x) {
		return randomas();
	}
	x = xt;
	figuros[x]();
}

function fillCheck() {
	for (i = 0; i < m.length; i++) {
		if (m[m.length - 1][i] == "") {
			score = score + tempScore;
			tempScore = 0;
			return;
		}
	}
	tempScore = tempScore + 100;
	removeCurrentObject();
	m.pop();
	lentaMini();
	redrawCurrentObject();
	fillCheck();
}

function lentaMini() {
	var lentele = $("table");
	for (i = 0; i < 1; i++) {
		var c = [];
		ntr = $("<tr>");
		for (j = 0; j < 10; j++) {
			c[j] = "";
			$("<td>").appendTo(ntr);
		}
		m.unshift(c);
		lentele.prepend(ntr);
		$('table tr:last-child').remove();
	}
}

function removeCurrentObject() {
	for (i = 0; i < currentObject.length; i++) {
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$("tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $("tr").eq(eilute).children().eq(stulpelis).attr('class');
		$("tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
	}
}

function redrawCurrentObject() {
	for (i = 0; i < currentObject.length; i++) {
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$("tr").eq(eilute).children().eq(stulpelis).text("X");
		$("tr").eq(eilute).children().eq(stulpelis).addClass(klase);
		m[eilute][stulpelis] = "X";
	}
}

function changeObject() {
	if (figura == "linija") {
		var stulpelisF = currentObject[0].stulpelis;
		var eiluteF = currentObject[0].eilute;
		for (i = 1; i < currentObject.length; i++) {
			if ($("tr").eq(eiluteF + i).children().eq(stulpelisF).text() != "") {
				console.log("negaliu keisti padeties");
				return;
			}
		};
		removeCurrentObject();
		for (i = 1; i < currentObject.length; i++) {
			currentObject[i].stulpelis = stulpelisF;
			currentObject[i].eilute = eiluteF + i;
		};
		redrawCurrentObject();
		figura = "stulpelis";
		return;
	};
	if (figura == "stulpelis") {
		var stulpelisF = currentObject[0].stulpelis;
		var eiluteF = currentObject[0].eilute;
		for (i = 1; i < currentObject.length; i++) {
			if ($("tr").eq(eiluteF).children().eq(stulpelisF + i).text() != "") {
				console.log("negaliu keisti padeties");
				return;
			}
		};
		removeCurrentObject();
		for (i = 1; i < currentObject.length; i++) {
			currentObject[i].stulpelis = stulpelisF + i;
			currentObject[i].eilute = eiluteF;
		};
		redrawCurrentObject();
		figura = "linija";
		return;
	};
}


/* test */
var lock = false;
function dotas (eilute, stulpelis, spalva, lcs, rcs, bce, lce) {	
	this.eilute = eilute;
	this.stulpelis = stulpelis;
	this.spalva = spalva;
	this.leftCheckStulpelis = lcs;
	this.rightCheckStulpelis = rcs;
	this.botCheckEilute = bce
	this.lastCheckEilute = lce
	$("tr").eq(eilute).children().eq(stulpelis).text("X");
	$("tr").eq(eilute).children().eq(stulpelis).addClass(spalva);
	m[eilute][stulpelis]="X";
}

//currentObject.push(new kordinate(j, i));

function drawDotas (eilute, stulpelis, spalva,lcs, rcs, bce, lce){
	if ($("tr").eq(eilute).children().eq(stulpelis).text() == "") {
				currentObject.push(new dotas(eilute, stulpelis, spalva,lcs, rcs, bce, lce))
			}
};
function checkDotas (eilute, stulpelis){
if ($("tr").eq(eilute).children().eq(stulpelis).text() != "") {
	lock = true;
	return;
}
};

function lockas (){
if (lock == true){
		console.log("netelpa nauja figura");
		lock = false;
		count++;
		currentObject = [];
		randomas();		
		return true;
	}	
}
function trikampis (){
	figura = "trikampis1"
	checkDotas (0,4);
	checkDotas (1,4);
	checkDotas (1,5);
	if (lockas()){	
		return;
	}
	drawDotas(0,4,"red",-1,1,0);
	drawDotas(1,4,"red",-1,0,1);
	drawDotas(1,5,"red",0,1,1);
};

function linija (){
	figura = "line"
	checkDotas (0,3);
	checkDotas (0,4);
	checkDotas (0,5);
	checkDotas (0,6);
	if (lockas()){	
		return;
	}
	drawDotas(0,3,"gy",-1,0,1);
	drawDotas(0,4,"gy",0,0,1);
	drawDotas(0,5,"gy",0,0,1);
	drawDotas(0,6,"gy",0,1,1);
};
function checkasXL (){
	for (i = 0; i < currentObject.length; i++) {
	var stulpelis = currentObject[i].stulpelis + currentObject[i].leftCheckStulpelis;
	var eilute = currentObject[i].eilute;
	
	if (stulpelis == currentObject[i].stulpelis){
	continue;
	}
	if ($("tr").eq(eilute).children().eq(stulpelis).text() != "") {
	console.log ("trukdo kita figura");
	return true;
	}	
	}	
}

function checkasXR (){
	for (i = 0; i < currentObject.length; i++) {
	var stulpelis = currentObject[i].stulpelis + currentObject[i].rightCheckStulpelis;
	var eilute = currentObject[i].eilute;

	if (stulpelis == currentObject[i].stulpelis){
	continue;
	}
	if ($("tr").eq(eilute).children().eq(stulpelis).text() != "") {
	console.log ("trukdo kita figura");
		return true;
	}
	
	
	}	
}

function checkasBot (){
	for (i = 0; i < currentObject.length; i++) {
	var stulpelis = currentObject[i].stulpelis;
	var eilute = currentObject[i].eilute + currentObject[i].botCheckEilute;

	if (eilute == currentObject[i].eilute){
	continue;
	}
	if ($("tr").eq(eilute).children().eq(stulpelis).text() != "") {
	console.log ("trukdo kita figura");
	console.log("nauja figura");
	currentObject = [];
	randomas();
	return true;
	}
	
	
	}	
}

function kebab (){
	if (figura == "trikampis1"){	
	var stulpelis = currentObject[0].stulpelis;
	var eilute = currentObject[0].eilute;
	checkDotas (eilute,stulpelis+1);
	if (lock == true){
		console.log("negaliu keisti padeties");
		lock = false;
		return;
	}
	removeCurrentObject();
	currentObject =[];
	drawDotas(eilute,stulpelis,"red",-1,0,0); 
	drawDotas(eilute+1,stulpelis,"red",-1,1,1);
	drawDotas(eilute,stulpelis+1,"red",0,1,1,2);	
	redrawCurrentObject();
	figura == "trikampis2"
	};

}