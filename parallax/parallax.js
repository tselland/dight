$(window).scroll(function(){
	var scrollDist = $(window).scrollTop();
	$(".slowScroll").css("top",scrollDist*-0.25+'px');
	$(".reverseScroll").css("left",scrollDist+'px');
	$(".fastScroll").css("top",scrollDist*-2+'px');
	$(".background").css("top",scrollDist*-0.1+'px');
});