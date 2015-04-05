jQuery(document).ready(function($){
    
	//filtro jquery para portfolio
	$('.portfolio_items').mixItUp();
	
	//carrousel para mensagens...
	$('.testimonial').owlCarousel({
		items: 1,
		singleItem : true,
		pagination : false,
		navigation : true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});
	
	//parallax effect
	//$('.click_sharea_bg').parallax("50%",0.1);
	//$('.uniq_bg').parallax("50%",0.1);
	//$('.testimonial_bg').parallax("50%",0.1);
	
});