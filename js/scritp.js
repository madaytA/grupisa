
$(document).ready(function(){
	var ctem =false;
	var scroll;
//para el efecto del menu
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if( scroll > 40){
			$('.menu1').css({'left':'115px','top':'10px'});
			$('.menu2').css({'left':'555px','top':'10px'});
			$('.txtme').css({'color':'#d9e7c0','background':'#95b538','padding':'5px','border-radius':'2px'});
			$('li').css({'border-right':'none'});
			$('nav').css({'height':'35px','background':'rgba(58, 125, 82, 0.4)'});
		}else{
			$('.menu1').css({'left':'330px','top':'33px'});
			$('.menu2').css({'left':'555px','top':'33px'});
			$('.txtme').css({'color':'#ccc','background':'#fff'});
			$('nav').css({'height':'78px','background':'#fff'});
			$('li').css({'border-right':'2px solid #ccc'});
		}
	});

//para animar scroll
	$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 1300);
       return false;
      }
    }

  });

//para es slider

    $('.next').click(function(){
      $(".cont-slider").animate({"left": "-50%"}, "slow");
  });
    $('.prev').click(function(){
      $(".cont-slider").animate({"left": "+0%"}, "slow");
  });


});

