$(document).ready(function() {
	toggle();
	cover();
	team();
	slickas();
});

function slickas() {
	$(".slider").slick({
		arrows: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<img class="rarrow" src="images/right-arrow.png" alt="larrow">',
		prevArrow: '<img  class="larrow" src="images/left-arrow.png" alt="rarrow">',
	});
}

function toggle() {
	$(".button1").on("click", function() {
		$(".hire-us").addClass("show");
	})
	$(".close").on("click", function() {
		$(".hire-us").removeClass("show");
	})
}

function cover() {
	$(".magic").on("click", function() {
		$("#menu-cover *").removeClass("hide");
		if ($("#menu-cover").hasClass("open")) {
			$("#menu-cover *").addClass("hide");
			$("#menu-cover").toggleClass("open");
			return;
		}
		$("#menu-cover").toggleClass("open");
	})
}
var lastClicked = 0;

function team() {
	for (i = 0; i < 4; i++) {
		clicking(i);
		hover(i);
	}
}

function hoverOn(i) {
	cssReset();
	hover(lastClicked);
	$(".dots button").eq(i).css("background-color", "#f7600e");
	$(".team-members").eq(i).css("filter", "grayscale(0%)");
	$(".team-members").eq(i).css("padding-top", "80px");
};

function hoverOff(i) {
	$(".dots button").eq(i).css("background-color", "#c4c6c9");
	$(".team-members").eq(i).css("filter", "grayscale(100%)");
	$(".team-members").eq(i).css("padding-top", "100px");
};

function hover(i) {
	$(".team-members").eq(i).hover(function() {
		hoverOn(i)
	}, function() {
		hoverOff(i)
	})
}

function cssReset() {
	$(".team-members").css("filter", "grayscale(100%)");
	$(".team-members").css("padding-top", "100px");
	$(".dots button").css("background-color", "#c4c6c9");
}

function clicking(i) {
	$(".dots button").eq(i).on("click", function() {
		cssReset();
		$(".team-members").eq(i).css("filter", "grayscale(0%)");
		$(".team-members").eq(i).css("padding-top", "80px");
		$(".dots button").eq(i).css("background-color", "#f7600e");
		$(".team-members").eq(i).unbind();
		lastClicked = i;
	});
};