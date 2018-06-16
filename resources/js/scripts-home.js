jQuery(document).ready(function(){

	// Grid
	jQuery('.grid-button').click(function(){
		jQuery(this).toggleClass('grid-button-active');
		jQuery('.base-grid').slideToggle(800);
	});
	// Grid


	var distanciaTopoNav = jQuery(".floating-nav-wrapper").offset().top;
	var	download = jQuery(".download").offset().top;
	var	estrutura = jQuery(".estrutura").offset().top;
	var	componentes = jQuery(".componentes").offset().top;
	var	template = jQuery(".template").offset().top;


	
	jQuery(window).scroll(function(){
		var distanciaTopo = jQuery(this).scrollTop();
		
		// Menu Principal
		if (distanciaTopo >= 100) {
			jQuery("header").addClass("active");
			jQuery("header .content").addClass("active");
			jQuery("#intro-wrapper").addClass("active");

		}else{
			jQuery("header").removeClass("active");
			jQuery("header .content").removeClass("active");
			jQuery("#intro-wrapper").removeClass("active");
		}

		// Menu Principal

		// Menu FLutuante Home
		if (distanciaTopo >= distanciaTopoNav-120) {
			jQuery(".floating-nav-wrapper").addClass("active");
		}else{
			jQuery(".floating-nav-wrapper").removeClass("active");
		}

		if (distanciaTopo >= download-120) {
			jQuery(".floating-nav-wrapper a").removeClass("active");
			jQuery(".floating-nav-wrapper .download-item").addClass("active");
		}

		if (distanciaTopo >= estrutura-120) {
			jQuery(".floating-nav-wrapper a").removeClass("active");
			jQuery(".floating-nav-wrapper .estrutura-item").addClass("active");
		}

		if (distanciaTopo >= template-120) {
			jQuery(".floating-nav-wrapper a").removeClass("active");
			jQuery(".floating-nav-wrapper .template-item").addClass("active");
		}

		if (distanciaTopo >= componentes-200) {
			jQuery(".floating-nav-wrapper a").removeClass("active");
			jQuery(".floating-nav-wrapper .componentes-item").addClass("active");
		}

		// Menu FLutuante Home
	});

	jQuery(".comecando-item").click(function(){
		goScroll(".comecando");
	});

	jQuery(".download-item").click(function(){
		goScroll(".download");
	});

	jQuery(".estrutura-item").click(function(){
		goScroll(".estrutura");
	});

	jQuery(".componentes-item").click(function(){
		goScroll(".componentes");
	});

	jQuery(".template-item").click(function(){
		goScroll(".template");
	});	

	// Utils
	function goScroll (el){
	    jQuery('html, body').animate({
	        scrollTop: jQuery(el).offset().top-120
	    }, 500);
	}

});