$(document).ready(function() {
	$('.infowindow').on('click', '.arrow', function(e){
		console.log(this);
		$('.infowindow.active').removeClass('active');
	});
	$('.infowindow').on('click', '.summary-box', function(e){
		$(this).parent().addClass('active');
	});
});