$(document).ready(function(){
    $('.corousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider-arrow-right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider-arrow-left.png"></button>',
      });
  });