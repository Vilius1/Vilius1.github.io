$(document).ready(function() {
	toggle();
    hamburger();
});

function toggle() {
	$(".magic").on("click", function() {
		$(".works").addClass("show");
	})
	$(".close").on("click", function() {
		$(".works").removeClass("show");
	})
}

function hamburger (){
     $('#menu-toggle').click(function(){
        $(this).toggleClass('open'),
        $('.main-nav').toggleClass('show-it');
      })
}