$(function(){

  $('.slider-top__inner').slick({

    arrows: false,
    dots: true,
    autoplay: true

  });

  $('.partners__slider').slick({

    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,

  });

  var mixer = mixitup('.products__items'); 
  var mixer = mixitup('.design__items'); 
  
});