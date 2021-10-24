const galery = document.querySelector('.container-galery');
const tiny = document.querySelector('.tiny');
const titan = document.querySelector('.titan');

galery.addEventListener('click', function(e){
	if(e.target.className == 'tiny'){
		titan.src = e.target.src;
		titan.classList.add('fade');
		setTimeout(function(){
			titan.classList.remove('fade');
		}, 100);
	}
});