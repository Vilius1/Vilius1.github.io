/*$.ajax({
    method: 'GET',
    url: 'https://api.github.com/users/'+ 'vilius1',
    success: function (duomenys) {
        document.write(duomenys.location);
        document.write(<br/>);
        document.write(duomenys.name);
    }
})*/
//json.parse
///////////////////////////////////////
m = [];
k = [];

var directionRight = true;
var directionLeft = false;
var directionTop = false;
var directionBottom = false;
var ilgis = 2;
var maistas = false;
var x=0;
var y=0;
var ejimas=0;
var apple = false;
var direction = "Right";
function lenta(ilgis) {
	m = [];
	var xx = document.getElementById("tabas");
	xx.innerHTML = "";
	for (i = 0; i < ilgis; i++) {
		var c = [];
		var naujastr = document.createElement("tr");
		for (j = 0; j < ilgis; j++) {
			c[j] = "";
			var naujastd = document.createElement("td");
			naujastr.appendChild(naujastd);
		}
		m[i] = c;
		xx.appendChild(naujastr);
	}
	
	spawn(ilgis)
}

function spawn(ilgis) {
	var kordinate = Math.floor(ilgis / 2) - 1;
	eilutePlus = kordinate + 3;
	eiluteMinus = kordinate;
	stulpelis = kordinate;
	for (i = kordinate; i < kordinate + 3; i++) {
		m[kordinate][i] = "X";
		$("#tabas tr")[kordinate].children[i].innerText = ("X");
	}
}
function random (){
x=Math.floor(Math.random()*25);
y=Math.floor(Math.random()*25);
}
function obuolys (){
    if (ejimas >= 15 && apple == false){
        if ($("#tabas tr")[x].children[y].innerText !== ("")){
            random ();
            obuolys();
            return;}
                
    m[x][y]="O";
    $("#tabas tr")[x].children[y].innerText = ("O");
    ejimas = 0;
    apple = true;}
}


function clickas(event) {
	if (event.keyCode == 39 && directionLeft !== true) {
        directionRight = true;        
        rightAdd();
        obuolys ();
        ejimas++;
        resetV ();
        direction = "Right";
        styling ();
        
    }

    else if (event.keyCode == 37 && directionRight !== true) {
        directionLeft = true;
        leftAdd();
        obuolys ();
        ejimas++;
        resetV ();
        direction = "Left";
        styling ();
        
    }

    else if (event.keyCode == 38 && directionBottom !== true) {
        directionTop = true;
        topAdd();
        obuolys ();
        ejimas++;
        resetH ();
        direction = "Top";
        styling ();
    }

    else if (event.keyCode == 40 && directionTop !== true) {
        directionBottom = true;
        bottomAdd();
        obuolys ();
        ejimas++;
        resetH ();
        direction = "Bottom";
        styling ();
    }
    
}
function resetH (){
directionRight = false;
directionLeft = false;
}

function resetV (){
directionTop = false;
directionBottom = false;   
}

function scan() {
	for (i = 0; i < m.length; i++) {
		for (j = 0; j < m.length; j++) {
			if (m[i][j] == "X") {
				k.push(duomenys = {
					eilute: i,
					stulpelis: j,
				});
			}
		}
	}
    
}
function remove() {
    if (maistas == true){
        maistas = false;
        ilgis++;
        return;
    }
	$("#tabas tr")[k[0].eilute].children[k[0].stulpelis].innerText = ("");
	k.shift();
}

function rightAdd() {
	if (k[ilgis].stulpelis + 1 !== m.length) {
        if ($("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis + 1].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis + 1].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis + 1].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute,
			stulpelis: k[ilgis].stulpelis + 1,
		});
	} else if (k[ilgis].stulpelis + 1 == m.length) {
        if ($("#tabas tr")[k[ilgis].eilute].children[0].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute].children[0].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute].children[0].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute,
			stulpelis: 0,
		});
	}
	remove();
}




function bottomAdd() {
	if (k[ilgis].eilute + 1 !== m.length) {
        if ($("#tabas tr")[k[ilgis].eilute+ 1].children[k[ilgis].stulpelis].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute+ 1].children[k[ilgis].stulpelis].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute+ 1].children[k[ilgis].stulpelis].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute+1,
			stulpelis: k[ilgis].stulpelis,
		});
	} else if (k[ilgis].eilute + 1 == m.length) {
        if ($("#tabas tr")[0].children[k[ilgis].stulpelis].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[0].children[k[ilgis].stulpelis].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[0].children[k[ilgis].stulpelis].innerText = ("X");
		k.push(duomenys = {
			eilute: 0,
			stulpelis: k[ilgis].stulpelis,
		});
	}
	remove();
}


function topAdd() {
	if (k[ilgis].eilute  !== 0) {
        if ($("#tabas tr")[k[ilgis].eilute - 1].children[k[ilgis].stulpelis].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute - 1].children[k[ilgis].stulpelis].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute - 1].children[k[ilgis].stulpelis].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute-1,
			stulpelis: k[ilgis].stulpelis,
		});
	} else if (k[ilgis].eilute == 0) {
        if ($("#tabas tr")[m.length-1].children[k[ilgis].stulpelis].innerText == ("X")){alert("Game Over");gameOver()};
        if ($("#tabas tr")[m.length-1].children[k[ilgis].stulpelis].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[m.length-1].children[k[ilgis].stulpelis].innerText = ("X");
		k.push(duomenys = {
			eilute: m.length-1,
			stulpelis: k[ilgis].stulpelis,
		});
	}
	remove();
}


function leftAdd() {
	if (k[ilgis].stulpelis  !== 0) {
        if ($("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis - 1].innerText == ("X")){alert("Game Over"); gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis - 1].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute].children[k[ilgis].stulpelis - 1].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute,
			stulpelis: k[ilgis].stulpelis - 1,
		});
	} else if (k[ilgis].stulpelis == 0) {
        if ($("#tabas tr")[k[ilgis].eilute].children[m.length-1].innerText == ("X")){alert("Game Over"); gameOver()};
        if ($("#tabas tr")[k[ilgis].eilute].children[m.length-1].innerText == ("O")){maistas = true; apple = false;};
		$("#tabas tr")[k[ilgis].eilute].children[m.length-1].innerText = ("X");
		k.push(duomenys = {
			eilute: k[ilgis].eilute,
			stulpelis: m.length-1,
		});
	}
	remove();
}

function forever (){
    if (direction == "Right"){
    rightAdd();    
    setTimeout(function(){ forever(); }, 500);
    ejimas++;
    obuolys();
    styling ();}

    if (direction == "Left"){
    leftAdd();    
    setTimeout(function(){ forever(); }, 500);
    ejimas++;
    obuolys();
    styling ();}

    if (direction == "Top"){
    topAdd();    
    setTimeout(function(){ forever(); }, 500);
    ejimas++;
    obuolys();
    styling ();}

    if (direction == "Bottom"){
    bottomAdd();    
    setTimeout(function(){ forever(); }, 500);
    ejimas++;
    obuolys();
    styling ();}

}

$(document).ready(function() {
	lenta(25);
	scan();
    $("body").on("keydown", function (){
        clickas(event);
    })
    forever ()
});

function gameOver(){
 directionRight = true;
 directionLeft = true;
 directionTop = true;
 directionBottom = true;
 direction = "";
}

function styling (){
     for (l=0;l<m.length;l++){

        for (j=0;j<m.length;j++){
            $("#tabas tr")[l].children[j].className ="white";

        }
        

     }



for (i=0;i<k.length;i++){

$("#tabas tr")[k[i].eilute].children[k[i].stulpelis].className ="green";
}
$("#tabas tr")[k[k.length-1].eilute].children[k[k.length-1].stulpelis].className ="red";
if (direction == "Left") {
 $("#tabas tr")[k[k.length-1].eilute].children[k[k.length-1].stulpelis].className ="red2";   
}
if (direction == "Top") {
 $("#tabas tr")[k[k.length-1].eilute].children[k[k.length-1].stulpelis].className ="red3";   
}
if (direction == "Bottom") {
 $("#tabas tr")[k[k.length-1].eilute].children[k[k.length-1].stulpelis].className ="red4";   
}
if (apple == true){
$("td:contains('O')")[0].className = "orange";}


}