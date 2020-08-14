// Search Dropdown
$(function(){
	$(".dropdown-item").click(function(){
		var icon_text=$(this).html();
		$(".dropdown-toggle").html(icon_text);
	})
})


//Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600
});