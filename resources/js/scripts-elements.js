jQuery(document).ready(function(){

	// Grid
	jQuery('.grid-button').click(function(){
		jQuery(this).toggleClass('grid-button-active');
		jQuery('.base-grid').slideToggle(800);
	});

	// Table
	jQuery(".table-button.s").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".classStriped").toggle();
		jQuery(".table").toggleClass("table-striped");
	});

	jQuery(".table-button.h").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".classHover").toggle();
		jQuery(".table").toggleClass("table-hover");
	});

	jQuery(".table-button.b").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".classBorder").toggle();
		jQuery(".table").toggleClass("table-border");
	});

	jQuery(".table-button.c").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".classCondenced").toggle();
		jQuery(".table").toggleClass("table-condenced");
	});

});