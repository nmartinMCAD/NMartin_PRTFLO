//Using jQuery
$(function() {
	$("h3#buttonOne").click(function() {
		$("body").removeClass();
		$("body").addClass("sectionOne");
	});
});

$(function() {
	$("h3#buttonTwo").click(function() {
		$("body").removeClass();
		$("body").addClass("sectionTwo");
	});
});

$(function() {
	$("h3#buttonThree").click(function() {
		$("body").removeClass();
		$("body").addClass("sectionThree");
	});
});

$(function() {
	$("h3#buttonFour").click(function() {
		$("body").removeClass();
		$("body").addClass("sectionFour");
	});
});

$(function() {
	$("h3#aboutButton").click(function() {
		$("body").removeClass();
		$("body").addClass("aboutSection");
	});
});

$(function() {
	$("h3#blogButton").click(function() {
		$("body").removeClass();
		$("body").addClass("blogSection");
	});
});

$(function() {
	$(".siteSection i").click(function() {
		$("body").removeClass();
	});
});
