images = ["images/uostas.png", "images/map.png", "images/ilogo1.png", "images/ilogo2.png"];
var count = 0;

function moveRigth() {
	var image = $("#paveikslas1")
	image.hide();
	if (count >= images.length - 1) {
		count = -1;
	}
	count++;
	image.attr("src", images[count]);
	image.fadeIn(1100);
}

function moveLeft() {
	var image = $("#paveikslas1");
	image.hide();
	if (count == 0) {
		count = images.length;
	}
	count--;
	image.attr("src", images[count]);
	image.fadeIn(1100);
}
$(document).ready(function() {
	var mygtukas = $(".container_2 button");
	mygtukas[0].onclick = function() {
		moveLeft()
	}
	mygtukas[1].onclick = function() {
		moveRigth()
	}
	
	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   alert("Browser is Safari2");
	$("white-menu").addClass(".safari-fix");
}
});


