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
	$(".siteSection i.fa-times").click(function() {
		$("body").removeClass();
	});
});



//Show more project info

/*
var moreInfo = "<i class='fa fa-plus' aria-hidden='true'></i><h3>more info</h3>";
var lessInfo = "<i class='fa fa-minus' aria-hidden='true'></i><h3>less info</h3>";

$("div.showMore").click(function (evt) {
	  $(this).next().slideToggle("slow");
		$(this).html(lessInfo);
		$(this).attr("id", "showLess");
});

$("div#showLess").click(function (evt) {
		$(this).html(moreInfo);
		$(this).removeAttr("id");
})

*/

$("div.showMore").click(function (evt) {
	  $(this).next().slideToggle("slow");
		$(this).children("h3").text(function(i, text) {
			return text === "more info" ? "less info" : "more info";
		})
});


/*
$("div.showLess").click(function (evt) {
	  $(this).parent().slideToggle("slow");
});
*/

/*
function onOpen () {
	$(".projectInfoBox1").fadeIn(200);
}
*/
