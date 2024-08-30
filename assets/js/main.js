   
    // -----of canvas menu code
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    jQuery(document).ready(function($){
        // Toggle mini-cart and hide mini-wishlist if it's open
        $("#mini-cart-icon").click(function(event){
            event.preventDefault(); // Prevent default link behavior
            $("#mini-wishlist").hide(); // Hide the wishlist if it's open
            $("#mini-cart").fadeToggle(); // Toggle the mini-cart
        });

        // Toggle mini-wishlist and hide mini-cart if it's open
        $("#mini-wishlist-icon").click(function(event){
            event.preventDefault(); // Prevent default link behavior
            $("#mini-cart").hide(); // Hide the mini-cart if it's open
            $("#mini-wishlist").fadeToggle(); // Toggle the mini-wishlist
        });
    });


    // -----Country Code Selection
    $("#mobile_code").intlTelInput({
        initialCountry: "pk",
        separateDialCode: true,
        // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
    });
        

    $(document).ready(function() {
        // Loop through each input field and corresponding eye icon
        $(".eye-hide-seek").each(function() {
            $(this).click(function() {
                // Get the corresponding password field (sibling of the clicked eye icon)
                var passwordField = $(this).siblings(".acc-detail-password-field");
    
                // Toggle the password field type between "password" and "text"
                if (passwordField.attr("type") === "password") {
                    passwordField.attr("type", "text");  // Show password
                    $(this).removeClass("fa-eye").addClass("fa-eye-slash"); // Change to eye icon
                } else {
                    passwordField.attr("type", "password");  // Hide password
                    $(this).removeClass("fa-eye-slash").addClass("fa-eye"); // Change to eye-slash icon
                }
            });
        });
    });

    // $(document).ready(function() {
    //     $("#acc-detail-old-password-eye").click(function() {
    //         // Toggle the password field type
    //         var passwordField = $("#acc-detail-old-password-field");
            
    //         if (passwordField.attr("type") === "password") {
    //             passwordField.attr("type", "text"); // Show password
    //         } else {
    //             passwordField.attr("type", "password"); // Hide password
    //         }

    //         // Toggle the icon class between fa-eye-slash and fa-eye
    //         $(this).toggleClass("fa-eye fa-eye-slash");
    //     });
    // });

    // -----account detail page update password button code
    var confirmPasswordField = document.getElementById("confirm-password-field");
    var updatePasswordButton = document.getElementById("btn-update-password");

    updatePasswordButton.classList.add("disabled");

    confirmPasswordField.addEventListener("input", function() {
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




    
