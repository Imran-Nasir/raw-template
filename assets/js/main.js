$(document).ready(function () {
  // Collapse toggle for icons
  $('a[data-bs-toggle="collapse"]').on("click", function () {
    var $this = $(this);
    var $icon = $this.find("i");
    if ($this.attr("aria-expanded") === "true") {
      $icon.removeClass("fa-minus").addClass("fa-plus");
    } else {
      $icon.removeClass("fa-plus").addClass("fa-minus");
    }
  });

  // Slick carousel setup for marquee
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

  // Filter image toggle
  $("#filter-image").on("click", function () {
    var $sidebar = $("#sidebar");
    var $content = $("#content");
    var $s_archive = $(".shop-archive");
    var $s_filters = $(".shop-filters");
    $sidebar.toggleClass("d-none col-md-3 col-lg-3 col-xl-3");
    $content.toggleClass("col-md-9 col-lg-9 col-xl-9 col-md-12 col-lg-12");
    $s_archive.toggleClass("col-md-4 col-md-3");
    $s_filters.toggleClass("d-block d-none");
  });

  // Thumbnail click event for large image
  $('.thmb-s-img').click(function () {
    event.preventDefault();
    var largeImage = $(this).attr('data-full');
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.full img').hide().attr('src', largeImage).fadeIn();
  });

  // Password field toggle
  $(".eye-hide-seek").each(function () {
    $(this).click(function () {
      var passwordField = $(this).siblings(".acc-detail-password-field");
      if (passwordField.attr("type") === "password") {
        passwordField.attr("type", "text");
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      } else {
        passwordField.attr("type", "password");
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      }
    });
  });

  // Quantity increment and decrement
  $(".btn-plus").on("click", function () {
    var qty = parseInt($(this).siblings(".qty-value").text());
    $(this).siblings(".qty-value").text(qty + 1);
  });

  $(".btn-minus").on("click", function () {
    var qty = parseInt($(this).siblings(".qty-value").text());
    if (qty > 1) {
      $(this).siblings(".qty-value").text(qty - 1);
    }
  });

  // noUiSlider setup for price range
  var priceSlider = document.getElementById("priceSlider");
  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [50, 1500],
      connect: true,
      range: {
        min: 0,
        max: 2000,
      },
      step: 50,
      tooltips: [true, true],
      format: {
        to: function (value) {
          return parseInt(value);
        },
        from: function (value) {
          return Number(value);
        },
      },
    });

    var startPriceValue = document.getElementById("startPriceValue");
    var endPriceValue = document.getElementById("endPriceValue");

    priceSlider.noUiSlider.on("update", function (values, handle) {
      if (handle === 0) {
        startPriceValue.innerHTML = values[handle];
      } else {
        endPriceValue.innerHTML = values[handle];
      }
    });
  }

  // Toggle mini-cart and mini-wishlist
  $("#mini-cart-icon").click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $("#mini-wishlist").hide();
    $("#mini-cart").fadeToggle();
  });

  $("#mini-wishlist-icon").click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $("#mini-cart").hide();
    $("#mini-wishlist").fadeToggle();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#mini-cart, #mini-cart-icon").length) {
      $("#mini-cart").hide();
    }
    if (!$(event.target).closest("#mini-wishlist, #mini-wishlist-icon").length) {
      $("#mini-wishlist").hide();
    }
  });

  // Country code selection
  $("#mobile_code").intlTelInput({
    initialCountry: "pk",
    separateDialCode: true,
  });

  // Account detail page update password button
  var confirmPasswordField = document.getElementById("confirm-password-field");
  var updatePasswordButton = document.getElementById("btn-update-password");
  if (confirmPasswordField) {
    updatePasswordButton.classList.add("disabled");
    confirmPasswordField.addEventListener("input", function () {
      if (confirmPasswordField.value.length > 0) {
        updatePasswordButton.disabled = false;
        updatePasswordButton.style.visibility = "visible";
        updatePasswordButton.classList.remove("disabled");
      } else {
        updatePasswordButton.disabled = true;
        updatePasswordButton.classList.add("disabled");
      }
    });
  }

  // Multi-step form progress
  let currentStep = 1;
  function updateProgressBar(step) {
    $(".progress-step").removeClass("active");
    $(".p-bar-label").css("font-weight", "normal");
    $(`#step${step}`).addClass("active");
    $(`#step${step}`).find(".p-bar-label").css("font-weight", "600");
    for (let i = 0; i < step; i++) {
      $(`#step${i}`).addClass("completed").find(".get-tick").html('<i class="fas fa-check"></i>');
    }
    let widthPercentage = (step - 1) * 50;
    $(".progress-line-filled").css("width", widthPercentage + "%");
    if (widthPercentage == 100) {
      $(".progress-line-filled").css("width", widthPercentage - 3.75 + "%");
    }
  }

  $(`#step${currentStep}`).find(".p-bar-label").css("font-weight", "600");
  $("#next1").click(function () {
    $("#form-step-1").addClass("d-none");
    $("#form-step-2").removeClass("d-none");
    currentStep = 2;
    updateProgressBar(currentStep);
    scrollToTop();
  });

  $("#next2").click(function () {
    $("#form-step-2").addClass("d-none");
    $("#form-step-3").removeClass("d-none");
    currentStep = 3;
    updateProgressBar(currentStep);
    scrollToTop();
  });

  $("#prev2").click(function () {
    $("#form-step-2").addClass("d-none");
    $("#form-step-1").removeClass("d-none");
    currentStep = 1;
    updateProgressBar(currentStep);
    scrollToTop();
  });

  $("#prev3").click(function () {
    $("#form-step-3").addClass("d-none");
    $("#form-step-2").removeClass("d-none");
    currentStep = 2;
    updateProgressBar(currentStep);
    scrollToTop();
  });

  // Card type detection
  function detectCardType(number) {
    const regex = {
      visa: /^4[0-9]{0,}$/,
      mastercard: /^(5[1-5]|2[2-7])[0-9]{0,}$/,
    };
    for (const [key, pattern] of Object.entries(regex)) {
      if (number.match(pattern)) {
        return key;
      }
    }
    return null;
  }

  $("#card-number").on("input", function () {
    const cardNumber = this.value.replace(/\s+/g, "");
    const cardType = detectCardType(cardNumber);
    const cardLogo = document.getElementById("card-logo");
    if (cardType) {
      cardLogo.src = `../assets/icons/${cardType}-logo.svg`;
      cardLogo.style.display = "block";
    } else {
      cardLogo.style.display = "none";
    }
  });

  // Form submit prevent default
  $("#checkout-form").on("submit", function (e) {
    e.preventDefault();
  });

  // Scroll to top function
  function scrollToTop() {
    let scrollValue;
    let screenWidth = $(window).width();
    if (screenWidth >= 991) {
      scrollValue = 650;
    } else if (screenWidth >= 768) {
      scrollValue = 560;
    } else {
      scrollValue = 480;
    }
    $("html, body").animate({ scrollTop: scrollValue }, "fast");
  }
});
