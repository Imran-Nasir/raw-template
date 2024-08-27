jQuery(document).ready(function ($) {
  $(".slick.marquee").slick({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 0,
    arrows: false,
    buttons: false,
  });
});
