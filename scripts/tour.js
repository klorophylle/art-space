$(document).ready(function () {
    'use strict';

    intialiserSlider('#ecran');
    intialiserSlider('#state');
});

function intialiserSlider(id_slider) {
    let slider = $(id_slider + ' .slider').bxSlider( {
        pager: false, // removes the default screen pager from the bxSlider
        controls: false // removes the default screen controls from the bxSlider
    });

    $(id_slider + ' .arrow-left').on('click', function(event) {
        event.preventDefault(); // prevents the top return while clicking on an empty link
        slider.goToPrevSlide(); 
    });

    $(id_slider + ' .arrow-right').on('click', function(event) {
        event.preventDefault();
        slider.goToNextSlide();
    });
}