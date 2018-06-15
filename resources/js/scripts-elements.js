jQuery(document).ready(function(){

	// Grid
	jQuery('.grid-button').click(function(){
		jQuery(this).toggleClass('grid-button-active');
		jQuery('.base-grid').slideToggle(800);
	});

	// Table
	jQuery(".table-button.s").click(function(){
		jQuery(".table").toggleClass("table-striped");
	});

	jQuery(".table-button.h").click(function(){
		jQuery(".table").toggleClass("table-hover");
	});

	jQuery(".table-button.b").click(function(){
		jQuery(".table").toggleClass("table-border");
	});

	jQuery(".table-button.c").click(function(){
		jQuery(".table").toggleClass("table-condenced");
	});

});