$(document).ready(function () {
    'use strict';

    $('.popup li').on('mousemove', function(event) {
        $(this).find('.tooltip').css({
            left : event.pageX + 5, // + 5 allows tooltip to disappear quickly after mouse has left the <li>
            top : event.pageY + 5,
        });
    });
});   


/* CAN REPLACE THE CSS DISPLAY : NONE/BLOCK
     $('.popup li').on('mouseenter', function()) {
   		$(this).find('.tooltip').show();
   	});
	
   	$('.popup li').on('mouseleave', function() {
   		$(this).find('.tooltip').hide();
   	});

OR
    $('.popup li').hover( function() {
		$(this).find('.tooltip').show();
	}, function() {
		$(this).find('.tooltip').hide();
    } );
*/