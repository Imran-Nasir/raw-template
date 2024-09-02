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
  $("#filter-image").on("click", function () {
    var $sidebar = $("#sidebar");
    var $content = $("#content");
  
    // Toggle the visibility of the sidebar and adjust the content width
    $sidebar.toggleClass("d-none col-md-3 col-lg-3 col-xl-3");
    $content.toggleClass(
      "col-md-9 col-lg-9 col-xl-9 col-md-12 col-lg-12 col-xl-12"
    );
  });