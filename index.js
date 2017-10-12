/* global $ */ 

//Slick slider
$(document).ready(function() {
  $('.socialMedia').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    draggable: true
  });
});

$(document).ready(function() {
  
});

/*JQuery to set Language Picture heights equal to width*/
function languageHeight() {
  var cw = $('.language').width();
$('.language').css({'height':cw+'px'});
  window.setTimeout(languageHeight, 100);
}

function toolHeight() {
  var cw = $('.tool').width();
$('.tool').css({'height':cw+'px'});
  window.setTimeout(toolHeight, 100);
}

languageHeight();
toolHeight();

