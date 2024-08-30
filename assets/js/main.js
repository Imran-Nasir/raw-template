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

$(document).ready(function () {
  // Initialize the main image slider
  $(".product-main-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-thumbnails",
  });

  // Initialize the thumbnail slider
  $(".product-thumbnails").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-main-image",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
  });
});
$(document).ready(function () {
  // Handle increment
  $(".btn-plus").on("click", function () {
    var qty = parseInt($(this).siblings(".qty-value").text());
    $(this)
      .siblings(".qty-value")
      .text(qty + 1);
  });

  // Handle decrement
  $(".btn-minus").on("click", function () {
    var qty = parseInt($(this).siblings(".qty-value").text());
    if (qty > 1) {
      // Ensure the quantity doesn't go below 1
      $(this)
        .siblings(".qty-value")
        .text(qty - 1);
    }
  });
});
