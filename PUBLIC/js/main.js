var sectionButton =
document.querySelector('.sectionButton');

sectionButton.addEventListener('click',
	function() {
		console.log('clicky!!!');
		document
			.querySelector('body')
			.classList
			.toggle('sectionOpen');
});


var backButton =
document.querySelector('.fa-caret-left')

backButton.addEventListener('click',
	function() {
		console.log ('clicky!!!');
		document
			.querySelector('body')
			.classList
			.toggle('sectionOpen');
});
