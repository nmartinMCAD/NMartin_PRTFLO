var webButton =
document.querySelector('#webButton');

webButton.addEventListener('click',
	function() {
		console.log('clicky!!!');
		document
			.querySelector('body')
			.removeAttribute('class')
			.querySelector('body')
			.classList
			.toggle('webSection');
});


var backButton =
document.querySelector('.fa-caret-left')

backButton.addEventListener('click',
	function() {
		console.log ('clicky!!!');
		document
			.querySelector('body')
			.removeAttribute('class')
});
