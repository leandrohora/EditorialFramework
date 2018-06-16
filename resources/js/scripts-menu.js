jQuery(document).ready(function(){
	
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

	});

});