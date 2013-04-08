(function($){
	
	$.fn.slideshow = function(options){

	var interval = (options.interval != undefined ? options.interval : 3000);
	var fadeTime = interval/3;


	var cur;
	var slides = $('.item');
	var numSlides = slides.length;
	var pos = 1;

	this.start = function(){
		//el.children('ul').children('li').css('opacity', '1');
		
		cur = $('.slider > .item:first-child');
		
		slides.addClass('hidden');
		slides.wrapAll('<div class="viewport" />');

		if(options.widget){
			var widget = $('<div>');
			widget.addClass('widget').html("Welcome to College Hill Custom Threads!<br />Please, Take a look around");
			$(this).append(widget);
			widget.hover(function(){
				widget.css('color', 'white');
			},
			function(){
				wdiget.css('color', '#adadad');
			})
		}

		fadeIn();
	}

	goNext = function(){
		
		if(pos == slides.length)
		{
			cur = $('.viewport > .item:first-child');
			pos = 0;
		}else{
			cur = cur.next('.item');
		}
		
		pos++;

		fadeIn();

	}
	fadeIn = function(){
		cur.siblings('.viewport > .item').removeClass('curSlide').addClass('hidden');//.css('opacity', 0);
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
			}, fadeTime, goNext);		
	}

	this.start();
	}


})(jQuery);