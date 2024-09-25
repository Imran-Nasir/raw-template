$(document).ready(function () {
  $('a[data-bs-toggle="collapse"]').on("click", function () {
    var $this = $(this);
    var $icon = $this.find("i");
    // Check the aria-expanded attribute to toggle the icon
    if ($this.attr("aria-expanded") === "true") {
      $icon.removeClass("fa-minus").addClass("fa-plus");
    } else {
      $icon.removeClass("fa-plus").addClass("fa-minus");
    }
  });
});
$("#filter-image").on("click", function () {
  var $sidebar = $("#sidebar");
  var $content = $("#content");
  var $s_archive = $(".shop-archive");
  var $s_filters = $(".shop-filters");
  // Toggle the visibility of the sidebar and adjust the content width
  $sidebar.toggleClass("d-none col-md-3 col-lg-3 col-xl-3");
  $content.toggleClass(
    "col-md-9 col-lg-9 col-xl-9 col-md-12 col-lg-12 col-xl-12"
  );
  $s_archive.toggleClass("col-md-4 col-md-3");
  $s_filters.toggleClass("d-block d-none");
});
$(".filter-button-1").on("click", function () {
  var $blog_sidebar = $(".blog-sidebar");
  var $blog_content = $(".blog-content");
  var $blog_archive = $(".blog-archive");
  // Toggle the visibility of the sidebar and adjust the content width
  $blog_sidebar.toggleClass("col-lg-3 d-none");
  $blog_content.toggleClass("col-lg-9 col-lg-12");
  $blog_archive.toggleClass("col-md-6 col-sm-6 col-md-4 col-sm-6");
});
$(document).ready(function () {
  $(".thmb-s-img").click(function () {
    event.preventDefault();
    var largeImage = $(this).attr("data-full");
    $(".selected").removeClass();
    $(this).addClass("selected");
    $(".full img").hide();
    $(".full img").attr("src", largeImage);
    $(".full img").fadeIn();
  });
  $(".full img").on("click", function () {
    var modalImage = $(this).attr("src");
    $.fancybox.open(modalImage);
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
$(document).ready(function () {
  const priceSlider = document.getElementById("priceSlider");
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
});
// -----of canvas menu code
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
jQuery(document).ready(function ($) {
  // Toggle mini-cart and hide mini-wishlist if it's open
  $("#mini-cart-icon").click(function (event) {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Stop the click from propagating to the document
    $("#mini-wishlist").hide(); // Hide the wishlist if it's open
    $("#mini-cart").fadeToggle(); // Toggle the mini-cart
  });
  // Toggle mini-wishlist and hide mini-cart if it's open
  $("#mini-wishlist-icon").click(function (event) {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Stop the click from propagating to the document
    $("#mini-cart").hide(); // Hide the mini-cart if it's open
    $("#mini-wishlist").fadeToggle(); // Toggle the mini-wishlist
  });
  // Close both mini-cart and mini-wishlist when clicking anywhere else on the body
  $(document).click(function (event) {
    if (!$(event.target).closest("#mini-cart, #mini-cart-icon").length) {
      $("#mini-cart").hide(); // Hide the mini-cart if clicked outside
    }
    if (
      !$(event.target).closest("#mini-wishlist, #mini-wishlist-icon").length
    ) {
      $("#mini-wishlist").hide(); // Hide the mini-wishlist if clicked outside
    }
  });
});
// -----Country Code Selection
const countryInput = $("#mobile_code");
if (countryInput.length) {
  countryInput.intlTelInput({
    initialCountry: "pk",
    separateDialCode: true,
  });
}
$(document).ready(function () {
  $(".eye-hide-seek").each(function () {
    $(this).click(function () {
      var passwordField = $(this).siblings(".acc-detail-password-field");
      if (passwordField.attr("type") === "password") {
        passwordField.attr("type", "text"); // Show password
        $(this).removeClass("fa-eye").addClass("fa-eye-slash"); // Change to eye icon
      } else {
        passwordField.attr("type", "password"); // Hide password
        $(this).removeClass("fa-eye-slash").addClass("fa-eye"); // Change to eye-slash icon
      }
    });
  });
});
// -----account detail page update password button code
var confirmPasswordField = document.getElementById("confirm-password-field");
var updatePasswordButton = document.getElementById("btn-update-password");
if (confirmPasswordField) {
  updatePasswordButton.classList.add("disabled");
  confirmPasswordField.addEventListener("input", function () {
    // Check if the confirm password field has at least one character
    if (confirmPasswordField.value.length > 0) {
      // Enable the update button, make it visible, and remove the disabled class
      updatePasswordButton.disabled = false;
      updatePasswordButton.style.visibility = "visible";
      updatePasswordButton.classList.remove("disabled");
    } else {
      // Disable the button, hide it, and add the disabled class
      updatePasswordButton.disabled = true;
      updatePasswordButton.classList.add("disabled");
    }
  });
}
$(document).ready(function () {
  let currentStep = 1; // By default, start at the first step
  // Function to update the progress bar
  function updateProgressBar(step) {
    // Remove active and bold style from all steps
    $(".progress-step").removeClass("active");
    $(".p-bar-label").css("font-weight", "normal");
    // Add active class to the current step
    $(`#step${step}`).addClass("active");
    // Add bold font to the label in the current step
    $(`#step${step}`).find(".p-bar-label").css("font-weight", "600");
    // Mark previous steps as completed and add check icon
    for (let i = 0; i < step; i++) {
      $(`#step${i}`)
        .addClass("completed")
        .find(".get-tick")
        .html('<i class="fas fa-check"></i>');
    }
    // Update progress line width based on step
    let widthPercentage = (step - 1) * 50;
    $(".progress-line-filled").css("width", widthPercentage + "%");
    if (widthPercentage == 100) {
      $(".progress-line-filled").css("width", widthPercentage - 3.75 + "%");
    }
  }
  // Initialize the progress bar by applying semi-bold to the first step's label
  $(`#step${currentStep}`).find(".p-bar-label").css("font-weight", "600");
  // Call the updateProgressBar function as needed when steps change
  // updateProgressBar(currentStep);
  function scrollToTop() {
    let scrollValue;
    // Get the screen width
    let screenWidth = $(window).width();
    // Set different scroll values based on screen width
    if (screenWidth >= 991) {
      // Large screens (desktops)
      scrollValue = 650; // Adjust this value for desktops
    } else if (screenWidth >= 768) {
      // Medium screens (tablets)
      scrollValue = 560;
    } else {
      // Small screens (mobile)
      scrollValue = 480; // Adjust this value for mobiles
    }
    // Perform the scroll
    $("html, body").animate({ scrollTop: scrollValue }, "fast");
  }
  $("#next1").click(function () {
    $("#form-step-1").addClass("d-none");
    $("#form-step-2").removeClass("d-none");
    currentStep = 2;
    updateProgressBar(currentStep);
    scrollToTop(); // Scroll to top when going to the next step
  });
  $("#next2").click(function () {
    $("#form-step-2").addClass("d-none");
    $("#form-step-3").removeClass("d-none");
    currentStep = 3;
    updateProgressBar(currentStep);
    scrollToTop(); // Scroll to top when going to the next step
  });
  // Previous Step
  $("#prev2").click(function () {
    $("#form-step-2").addClass("d-none");
    $("#form-step-1").removeClass("d-none");
    currentStep = 1;
    updateProgressBar(currentStep);
    scrollToTop(); // Scroll to top when going to the previous step
  });
  $("#prev3").click(function () {
    $("#form-step-3").addClass("d-none");
    $("#form-step-2").removeClass("d-none");
    currentStep = 2;
    updateProgressBar(currentStep);
    scrollToTop(); // Scroll to top when going to the previous step
  });
});
//-----------------------------------------------------------------------------\\
// detect card type
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
// Event listener for card number input
const cardNumber = document.getElementById("card-number");
if (cardNumber) {
  cardNumber.addEventListener("input", function () {
    const cardNumber = this.value.replace(/\s+/g, ""); // Remove spaces
    const cardType = detectCardType(cardNumber);
    const cardLogo = document.getElementById("card-logo");
    if (cardType) {
      cardLogo.src = `../assets/icons/${cardType}-logo.svg`; // Replace with actual path to logos
      cardLogo.style.display = "block";
    } else {
      cardLogo.style.display = "none";
    }
  });
}
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
jQuery(document).ready(function ($) {
  if ($(".slick.marquee").length) {
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
  }
  if ($(".clients-slider").length) {
    $(".clients-slider").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
});
//shop pagination
$(document).ready(function () {
  $(".pg-items, .pg-item-active").on("click", function (event) {
    event.preventDefault();
    // Remove the active class from all pagination items and reset them to .pg-items
    $(".pg-item").removeClass("pg-item-active").addClass("pg-items");
    // Toggle the clicked pagination item between .pg-items and .pg-item-active
    $(this).toggleClass("pg-items pg-item-active");
  });
});
