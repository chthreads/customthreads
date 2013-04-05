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
		cur.addClass('curSlide').removeClass('hidden');
		
		cur.animate({
			opacity:1
		}, 2000);

		setTimeout(function(){
			cur.animate({
				opacity:0
			}, fadeTime);
		}, interval-fadeTime);


		cur.siblings('.item').addClass('hidden').removeClass('curSlide');

		setInterval(goNext, interval);
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

		cur.addClass('curSlide').removeClass('hidden');

			cur.animate({
			opacity:1
		}, fadeTime);

		setTimeout(function(){
			cur.animate({
				opacity:0
			}, fadeTime);
		}, interval-fadeTime);

	

		cur.siblings('.item').addClass('hidden').removeClass('curSlide');//.css('opacity', 0);
	}

	this.start();
	}


})(jQuery);