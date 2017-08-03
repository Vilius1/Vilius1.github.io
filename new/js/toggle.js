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
	xrandom();
	randomas();
	refreshScore();
	 $("body").touchwipe({
     wipeLeft: function() { swipe(37); },
     wipeRight: function() { swipe(39); },
     wipeUp: function() { swipe(38); },
     wipeDown: function() { swipe(40); },
     min_move_x: 20,
     min_move_y: 20,
     preventDefaultEvents: true
});
	
});

var lentosDydis = 10;
var currentObject = [];
var figura;
var tempScore = 0;
var score = 0;
var klase = 0;


function restart() {
	$(".able tr").remove();
	lenta(lentosDydis);	
	score: 0;	
	currentObject=[];
	nextas=[];
	xrandom();
	randomas();
	refreshScore();
	x = 0;
	xt = 0;
}

function forever() {
	setTimeout(function() {
		moveDown();
	}, 700);	
	refreshScore();
	setTimeout(function() {
		forever();
	}, 700);
}


function lenta(ilgis) {
	m = [];
	var lentele = $(".able");
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

function lentaShow(ilgis) {
	
	var lentele = $(".kebab");
	lentele.html("");
	for (i = 0; i < ilgis; i++) {
		
		ntr = $("<tr>")
		for (j = 0; j < ilgis-6; j++) {
			
			$("<td>").appendTo(ntr);
		}
		
		lentele.append(ntr);
	}
}

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
			dropCheck = true;
			fillCheck();
			return;
		}		
		$(".able tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $(".able tr").eq(eilute).children().eq(stulpelis).attr('class');
		$(".able tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis;
		currentObject[i].eilute = eilute + 1;
		$(".able tr").eq(eilute + 1).children().eq(stulpelis).text("X");
		$(".able tr").eq(eilute + 1).children().eq(stulpelis).addClass(klase);
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
		$(".able tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $(".able tr").eq(eilute).children().eq(stulpelis).attr('class');
		$(".able tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis - 1;
		currentObject[i].eilute = eilute;
		$(".able tr").eq(eilute).children().eq(stulpelis - 1).text("X");
		$(".able tr").eq(eilute).children().eq(stulpelis - 1).addClass(klase);
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
		$(".able tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $(".able tr").eq(eilute).children().eq(stulpelis).attr('class');
		$(".able tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
		currentObject[i].stulpelis = stulpelis + 1;
		currentObject[i].eilute = eilute;
		$(".able tr").eq(eilute).children().eq(stulpelis + 1).text("X");
		$(".able tr").eq(eilute).children().eq(stulpelis + 1).addClass(klase);
		m[eilute][stulpelis + 1] = "X";
	}
}


function clickas(event) {
	if (event.keyCode == 39) { //right
		moveRight();
	} else if (event.keyCode == 37) { //left
		moveLeft();
	} else if (event.keyCode == 38) { //top
		changeObject();
	} else if (event.keyCode == 40) { //down		
		moveDown();		
		refreshScore();
	}
	else if (event.keyCode == 13) { //enter
		changeObject();
	}
	else if (event.keyCode == 32) { //enter
		dropDown();
	}
}

function swipe(code) {
	if (code == 39) {
	moveRight();
        
    }

    else if (code == 37) {
	moveLeft();
        
    }

    else if (code == 40) {
	changeObject();
    }

    else if (code == 38) {
		moveDown();		
		refreshScore();

    }
    
}
function refreshScore() {
	$("span").text("Score: " + score);
	//$(".kebab").text(nextas[0]+" " +" "+ nextas[1]+" " + nextas[2]);

	lentaShow(10);
	for (j=0; j<9; j=j+3){		
	for (i=0; i<3; i++){
		var figura = nextas[j/3];
		if (figura == 0){	
			drawShow(j,1,"red");
			drawShow(j+1,1,"red");
			drawShow(j+1,0,"red");
			drawShow(j+1,2,"red");
		}
		else if (figura == 1){
	
		
			drawShow(j,0,"blue");
			drawShow(j+1,0,"blue");
			drawShow(j+1,1,"blue");
			drawShow(j+1,2,"blue");}

		else if (figura == 2){
	
			drawShow(j,0,"gy");
			drawShow(j,1,"gy");
			drawShow(j,2,"gy");
			drawShow(j,3,"gy");
		}
		else if (figura == 3){
		
			drawShow(j,1,"vi");
			drawShow(j,2,"vi");
			drawShow(j+1,1,"vi");
			drawShow(j+1,0,"vi");	
		}
		else if (figura == 4){
			drawShow(j,0,"or");
			drawShow(j+1,0,"or");
			drawShow(j,1,"or");
			drawShow(j+1,1,"or");	
		}	
		
	}}
}

function drawShow(x,y,klase){
	$(".kebab tr").eq(x).children().eq(y).addClass(klase);
}
var figuros = [
	function() {
		trikampis2(0,4);
	},
	function() {
		cLine1(0,3);
	},
	function() {
		drawLinija(0,3);
	},
	function() {
		zigzagas1(0,4);
	},
	function() {
		kubas(0,4)
	},
];

var x = 0;
var xt = 0;
var y=0;
var nextas = [];
function randomas() {		
	xt = Math.floor(Math.random() * 5);
	if (xt == x) {
		return randomas();
	}
	figuros[nextas[0]]();
	x = xt;
	nextas.shift();
	nextas.push(x);
}

function xrandom(){
	for (i=0; nextas.length<4; i++){
		xt = Math.floor(Math.random() * 5);
		if (x==xt){
			continue;
		}
		x=xt;
		nextas.push(x);
		
	}
}


var fillLock = false;
function fillCheck() {
for (j=m.length-1; j >=0; j--){
	fillLock = false;
	for (i = 0; i < m.length; i++) {
		if (m[j][i] == "") {
			score = score + tempScore;
			tempScore = 0;
			fillLock = true;
			break;
		}
	}
	if (fillLock == true){
		fillLock=false;
		continue;
	}
	tempScore = tempScore + 100;
	removeCurrentObject();
	m.splice(j,1);
	lentaMini(j);
	redrawCurrentObject();
	}

}

function lentaMini(eilesNR) {
	$('.able tr').eq(eilesNR).remove();
	var lentele = $(".able");
	for (i = 0; i < 1; i++) {
		var c = [];
		ntr = $("<tr>");
		for (j = 0; j < 10; j++) {
			c[j] = "";
			$("<td>").appendTo(ntr);
		}
		m.unshift(c);
		lentele.prepend(ntr);		
	}
}

function removeCurrentObject() {
	for (i = 0; i < currentObject.length; i++) {
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$(".able tr").eq(eilute).children().eq(stulpelis).text("");
		klase = $(".able tr").eq(eilute).children().eq(stulpelis).attr('class');
		$(".able tr").eq(eilute).children().eq(stulpelis).removeClass(klase);
		m[eilute][stulpelis] = "";
	}
}

function redrawCurrentObject() {
	for (i = 0; i < currentObject.length; i++) {
		var stulpelis = currentObject[i].stulpelis;
		var eilute = currentObject[i].eilute;
		$(".able tr").eq(eilute).children().eq(stulpelis).text("X");
		$(".able tr").eq(eilute).children().eq(stulpelis).addClass(klase);
		m[eilute][stulpelis] = "X";
	}
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
	$(".able tr").eq(eilute).children().eq(stulpelis).text("X");
	$(".able tr").eq(eilute).children().eq(stulpelis).addClass(spalva);
	m[eilute][stulpelis]="X";
}


function drawDotas (eilute, stulpelis, spalva,lcs, rcs, bce, lce){
	if ($(".able tr").eq(eilute).children().eq(stulpelis).text() == "") {
				currentObject.push(new dotas(eilute, stulpelis, spalva,lcs, rcs, bce, lce))
			}
};
function checkDotas (eilute, stulpelis){
if (stulpelis > lentosDydis-1 || stulpelis < 0 || eilute >lentosDydis-1){
	lock = true;
	return;
}

if ($(".able tr").eq(eilute).children().eq(stulpelis).text() != "") {
	lock = true;
	return;
}
};

function lockas (){
if (lock == true){
		console.log("netelpa nauja figura");
		redrawCurrentObject();		
		//count++;		
		//randomas();		
		return true;
	}	
}
function trikampis (ste, sts){  //0 4
	figura = "trikampis1"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+2,sts);
	checkDotas (ste+1,sts+1);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"red",-1,1,0);
	drawDotas(ste+1,sts,"red",-1,0,0);
	drawDotas(ste+2,sts,"red",-1,1,1);
	drawDotas(ste+1,sts+1,"red",0,1,1,2);
};



function trikampisReverse (ste, sts){  //0 4
	figura = "trikampis2"
	removeCurrentObject();
	checkDotas (ste,sts-1);	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste,sts+1);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts-1,"red",-1,0,1,2);
	drawDotas(ste,sts,"red",-0,0,0);
	drawDotas(ste+1,sts,"red",-1,1,1);
	drawDotas(ste,sts+1,"red",0,1,1,2);

};

function trikampis1 (ste, sts){  //0 5
	figura = "trikampis3"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts-1);
	checkDotas (ste+2,sts);	
	gameOver(ste,sts,0, 5);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"red",-1,1,0);
	drawDotas(ste+1,sts-1,"red",-1,0,1,2);	
	drawDotas(ste+1,sts,"red",0,1,0);
	drawDotas(ste+2,sts,"red",-1,1,1);
	
};

function trikampis2 (ste, sts){  //0 4
	figura = "trikampis4"
	removeCurrentObject();
	checkDotas (ste,sts);	
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts-1);
	checkDotas (ste+1,sts+1);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];	
	drawDotas(ste,sts,"red",-1,1,0);
	drawDotas(ste+1,sts-1,"red",-1,0,1);	
	drawDotas(ste+1,sts,"red",0,0,1);	
	drawDotas(ste+1,sts+1,"red",0,1,1);
	
	
};



function drawLinija (ste, sts){  //0 3
	figura = "line"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste,sts+1);
	checkDotas (ste,sts+2);	
	checkDotas (ste,sts+3);
	gameOver(ste,sts,0, 3);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"gy",-1,0,1);
	drawDotas(ste,sts+1,"gy",0,0,1);
	drawDotas(ste,sts+2,"gy",0,0,1);
	drawDotas(ste,sts+3,"gy",0,1,1);

};

function drawStulpelis (ste, sts){  //0 3
	figura = "colum"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+2,sts);	
	checkDotas (ste+3,sts);
	gameOver(ste,sts,0, 3);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"gy",-1,1,0);
	drawDotas(ste+1,sts,"gy",-1,1,0);
	drawDotas(ste+2,sts,"gy",-1,1,0);
	drawDotas(ste+3,sts,"gy",-1,1,1);

};

function zigzagas1 (ste, sts){  //0 4
	figura = "zigzagas1"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste,sts+1);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts-1);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"vi",-1,0,0);
	drawDotas(ste+1,sts-1,"vi",-1,0,1);
	drawDotas(ste,sts+1,"vi",0,1,1);
	drawDotas(ste+1,sts,"vi",0,1,1);
	
	

};

function zigzagas2 (ste, sts){  //0 4
	figura = "zigzagas2"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts+1);	
	checkDotas (ste+2,sts+1);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"vi",-1,1,0);
	drawDotas(ste+1,sts,"vi",-1,0,1);	
	drawDotas(ste+1,sts+1,"vi",0,1,0);
	drawDotas(ste+2,sts+1,"vi",-1,1,1);
	
	

};

function cLine1 (ste, sts){  //0 3
	figura = "cline1"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts+1);
	checkDotas (ste+1,sts+2);	
	gameOver(ste,sts,0, 3);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"blue",-1,1,0);
	drawDotas(ste+1,sts,"blue",-1,0,1);
	drawDotas(ste+1,sts+1,"blue",0,0,1);
	drawDotas(ste+1,sts+2,"blue",0,1,1);	
	
	

};

function cLine2 (ste, sts){  //0 3
	figura = "cline2"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts+1);
	checkDotas (ste+1,sts+2);	
	checkDotas (ste+1,sts+3);	
	gameOver(ste,sts,0, 3);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"blue",-1,0,0);	
	drawDotas(ste+1,sts,"blue",-1,1,0);
	drawDotas(ste+2,sts,"blue",-1,1,1);	
	drawDotas(ste,sts+1,"blue",-0,1,1);
	

};


function cLine3 (ste, sts){  //0 3
	figura = "cline3"
	removeCurrentObject();	
	checkDotas (ste,sts+2);
	checkDotas (ste+1,sts);
	checkDotas (ste+1,sts+1);
	checkDotas (ste+1,sts+2);	
	gameOver(ste,sts,0, 3);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts+2,"blue",-1,1,0);
	drawDotas(ste+1,sts,"blue",-1,0,1);
	drawDotas(ste+1,sts+1,"blue",0,0,1);
	drawDotas(ste+1,sts+2,"blue",0,1,1);	
	
	

};

function kubas (ste, sts){  //0 4
	figura = "kubas"
	removeCurrentObject();	
	checkDotas (ste,sts);
	checkDotas (ste,sts+1);
	checkDotas (ste+1,sts+1);
	checkDotas (ste+1,sts);	
	gameOver(ste,sts,0, 4);
	if (lockas()){
		lock = false;	
		return;
	}
	currentObject = [];
	drawDotas(ste,sts,"or",-1,0,0);
	drawDotas(ste+1,sts,"or",-1,0,1);
	drawDotas(ste,sts+1,"or",0,1,0);
	drawDotas(ste+1,sts+1,"or",0,1,1);	
	
	

};


function checkasXL (){
	for (i = 0; i < currentObject.length; i++) {
	var stulpelis = currentObject[i].stulpelis + currentObject[i].leftCheckStulpelis;
	var eilute = currentObject[i].eilute;
	
	if (stulpelis == currentObject[i].stulpelis){
	continue;
	}
	if ($(".able tr").eq(eilute).children().eq(stulpelis).text() != "") {
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
	if ($(".able tr").eq(eilute).children().eq(stulpelis).text() != "") {
	console.log ("trukdo kita figura");
		return true;
	}
	
	
	}	
}
var dropCheck = false;
function checkasBot (){
	for (i = 0; i < currentObject.length; i++) {
	var stulpelis = currentObject[i].stulpelis;
	var eilute = currentObject[i].eilute + currentObject[i].botCheckEilute;

	if (eilute == currentObject[i].eilute){
	continue;
	}
	if ($(".able tr").eq(eilute).children().eq(stulpelis).text() != "") {
	console.log ("trukdo kita figura");
	console.log("nauja figura");
	currentObject = [];
	dropCheck = true;
	randomas();
	fillCheck();	
	return true;
	}
	
	
	}	
}


var changing =false;
function gameOver (ste, sts, firstE, firstS){
if (changing == true){
	changing=false;
	return;
}
if(ste == firstE && sts == firstS && lock == true){
return alert("game over you scored: " + score);	}
}

function changeObject (){
var eilute = currentObject[0].eilute;
var stulpelis = currentObject[0].stulpelis;
changing = true;
if (figura =="trikampis1"){
	trikampis2(eilute,stulpelis);
	return;
};
if (figura =="trikampis3"){
	trikampis(eilute,stulpelis);
	return;
};
if (figura =="trikampis2"){
	trikampis1(eilute,stulpelis+1);
	return;
};
if (figura =="trikampis4"){
	trikampisReverse(eilute,stulpelis);
	return;
};
if (figura =="line"){
	drawStulpelis(eilute,stulpelis);
	return;
};
if (figura =="colum"){
	drawLinija(eilute,stulpelis);
	return;
};
if (figura =="zigzagas1"){
	zigzagas2(eilute,stulpelis);
	return;
};
if (figura =="zigzagas2"){
	zigzagas1(eilute,stulpelis);
	return;
};
if (figura =="cline1"){
	cLine2(eilute,stulpelis);
	return;
};
if (figura =="cline2"){
	cLine3(eilute,stulpelis);
	return;
};
if (figura =="cline3"){
	cLine1(eilute,stulpelis-2);
	return;
};

}

function dropDown(){
	for(i=0; i<10; i++){
	setTimeout(function() {
	if (dropCheck==true){			
	return;};	
	moveDown();
	}, 100);

}
dropCheck=false;
}