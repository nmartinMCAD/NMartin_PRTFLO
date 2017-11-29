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
	$(".siteSection i.fa-times").click(function() {
		$("body").removeClass();
	});
});


//Show more project info

$("div.showMore").click(function (evt) {
	  $(this).next().slideToggle("slow");
		$(this).children("h3").text(function(i, text) {
			return text === "more info" ? "less info" : "more info";
		})
});
