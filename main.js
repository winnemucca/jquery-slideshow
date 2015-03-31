var speed = 500;
var autoswitch = true;
var autoswitch_speed = 4000;

function nextSlide(){
  		$('.active').removeClass('active').addClass('oldActive');

  		if($('.oldActive').is(':first-child')){
  			$('.slide').last().addClass('active');
  		} else {
  			$('.oldActive').prev().addClass('active');
  		}
  		$('.oldActive').removeClass('oldActive');
  		$('.slide').fadeOut(speed);
  		$('.active').fadeIn(speed);

  	}
 function prevSlide(){
 	$('.active').removeClass('active').addClass('oldActive');

  		if($('.oldActive').is(':first-child')){
  			$('.slide').last().addClass('active');
  		} else {
  			$('.oldActive').prev().addClass('active');
  		}
  		$('.oldActive').removeClass('oldActive');
  		$('.slide').fadeOut(speed);
  		$('.active').fadeIn(speed);
 }


$(document).on('ready', function() {
  // var speed = 500;
  // var autoswitch = true;
  // var autoswitch_speed = 4000;

  $('.slide').first().addClass('active');

  // hide all slides
  $('.slide').hide();

  // show first slide;
  $('.active').show();

  $('#next').on('click',nextSlide);



  $('#prev').on('click',prevSlide);

  // auto slider handler

  if(autoswitch == true){
  	setInterval(nextSlide,autoswitch_speed);
  }

  
  
});