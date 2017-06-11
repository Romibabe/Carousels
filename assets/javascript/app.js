$('.carousel.carousel-slider').carousel({fullWidth: true});

 $('.carousel').carousel('next');
$('.carousel').carousel('next', 3);


autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}




 
		