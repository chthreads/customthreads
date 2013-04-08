(function($){
	
	$.fn.slideshow = function(options){

	var interval = options.interval;
	var fadeTime = interval/3;

	var cur = $('.slider .item:first-child');
	var slides = $('.item');
	var numSlides = slides.length;
	var pos = 1;

	this.start = function(){
		//el.children('ul').children('li').css('opacity', '1');
		slides.addClass('hidden');

		fadeIn();

		setInterval(goNext, interval+2*fadeTime);
	}

	goNext = function(){
		
		if(pos == slides.length)
		{
			cur = $('.slider .item:first-child');
			pos = 0;
		}else{
			cur = cur.next();
		}
		
		pos++;

		fadeIn();

	}
	fadeIn = function(){
		cur.siblings('.item').removeClass('curSlide').addClass('hidden');//.css('opacity', 0);
		cur.addClass('curSlide').removeClass('hidden');
			cur.animate({
			opacity:1
		}, fadeTime, function(){
			setTimeout(fadeOut, interval);
		});
	}

	fadeOut = function(){
			cur.animate({
				opacity:0
			}, fadeTime);		
	}

	this.start();
	}


})(jQuery);