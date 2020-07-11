import 'bootstrap';

import '../scss/index.scss';
import '../js/slick.min.js';

// Your jQuery code

$(document).ready(function(){
  
$('.center').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    
});



