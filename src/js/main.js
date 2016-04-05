/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.js



/*
    Custom
 */

//= partials/helper.js
//= partials/nouislider.js
//= partials/waitimg.js


;(function(){

function forSVG() {
    $('.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
}






$(document).ready(function() {
	forSVG()



	var owl1 = $(".main-slider__owl");
	var owl2 = $(".lookbook__slider__wrapper");
	var owl3 = $(".product__image__slider");
	
	owl1.waitForImages(function() {
		owl1.owlCarousel({
			items: 1,
		    loop:true,
		    autoplay: true,
		    smartSpeed: 1500,
		    autoplaySpeed: 1500,
		    dots: false,
		});
	})
	

	$('.main-slider__prev').click(function() {
	    owl1.trigger('prev.owl.carousel');
	});
	$('.main-slider__next').click(function() {
	    owl1.trigger('next.owl.carousel');
	});


	owl1.waitForImages(function() {
		owl2.owlCarousel({
		    loop:true,
		    margin:30,
		    dots: false,
		    autoplay: true,
		    smartSpeed: 1500,
		    autoplaySpeed: 1500,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});
	})
	

	$('.lookbook__slider__prev').click(function() {
	    owl2.trigger('prev.owl.carousel');
	});
	$('.lookbook__slider__next').click(function() {
	    owl2.trigger('next.owl.carousel');
	});


	owl1.waitForImages(function() {
		owl3.owlCarousel({
		    loop:true,
		    margin:11,
		    autoplay: true,
		    smartSpeed: 600,
		    autoplaySpeed: 600,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

	})
	

	//init lookbook carousel

	$('.lookbook-page__item__photos').waitForImages(function() {
	    $(".lookbook-page__item__photos").owlCarousel({
		    loop:true,
		    margin:13,
		    autoplay: true,
		    smartSpeed: 600,
		    autoplaySpeed: 600,
		    items: 2,
		    dots: false,
		    autoWidth: true,
		    responsive:{
		        0:{
		            items:1,
		            autoWidth: true,
		            autoHeight: false,
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		});
	});
		
			

	//toggle menu main

	$(".header__nav__toggle").click(function(event) {
		event.preventDefault();
		$(".header__nav__menu").slideToggle("slow");
		/*$(this).next().slideToggle("slow");*/
	});

	//magnific gallerys 

	$('.magnific-gallery,.lookbook-page__gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true,
	           tCounter: '' 
	        }
	    });
	});

	//remove filters

	$(".filters-off__toggle").click(function(event) {
		var that = $(this);
		event.preventDefault();
		that.addClass("remove");
		setInterval(function(){that.remove()},200);
	});

	//remove cart's product

	$(".cart__table__body-col--delete").click(function(event) {
		var that = $(this).parent();
		that.addClass("remove");
		setInterval(function(){that.remove()},300);
	});

















	//custom range

	/*var html5Slider = document.getElementById('html5');

	noUiSlider.create(html5Slider, {
		start: [ 10, 30 ],
		connect: true,
		range: {
			'min': -20,
			'max': 40
		}
	});



	var inputNumber = document.getElementById('input-number');
	var inputNumber2 = document.getElementById('input-number2');

	html5Slider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			inputNumber.value = value;
		} else {
			inputNumber2.value = value;
		}
	});

	inputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});

	inputNumber2.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});*/





});


	



})();