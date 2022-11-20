
$(function () {
  $('.mainslide').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: '<div class="slide_left_arrow"><i class="xi-angle-left"></i></div>      ',
    nextArrow: '<div class="slide_right_arrow"><i class="xi-angle-right"></i></div>      '
});

$('.to_top').on('click', function(){
  $('html').animate({scrollTop:0}, 500);
});

})

