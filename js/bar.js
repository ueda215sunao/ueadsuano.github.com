$(function(){
	var controller = new slidebars();
 controller.init();

 $( '.sb-toggle-left' ).on( 'click', function ( event ) {
    event.preventDefault();
    event.stopPropagation();

    controller.toggle( 'sb-left' );
  } );
});

$(function(){
	$('.sb-toggle-left').click(function(){
		$(this).hide();
	})
});


