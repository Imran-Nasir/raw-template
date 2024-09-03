   
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

    // -----account detail page update password button code
    var confirmPasswordField = document.getElementById("confirm-password-field");
    var updatePasswordButton = document.getElementById("btn-update-password");

    if (confirmPasswordField) {
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

    }


        // -----multi step form code
        $(document).ready(function(){
            let currentStep = 1;
    
            // Update the progress bar
            function updateProgressBar(step) {
                $('.progress-step').removeClass('active');
                $(`#step${step}`).addClass('active');
    
                // Mark the previous step as completed and change number to tick
                for (let i = 1; i < step; i++) {
                    $(`#step${i}`).addClass('completed').find('.get-tick').text('✔');
                }
    
                let widthPercentage = (step - 1) * 50;
                $('.progress-line-filled').css('width', widthPercentage + '%');
            }
    
            // Next Step
            $('#next1').click(function() {
                $('#form-step-1').addClass('d-none');
                $('#form-step-2').removeClass('d-none');
                currentStep = 2;
                updateProgressBar(currentStep);
            });
    
            $('#next2').click(function() {
                $('#form-step-2').addClass('d-none');
                $('#form-step-3').removeClass('d-none');
                currentStep = 3;
                updateProgressBar(currentStep);
            });
    
            // Previous Step
            $('#prev2').click(function() {
                $('#form-step-2').addClass('d-none');
                $('#form-step-1').removeClass('d-none');
                currentStep = 1;
                updateProgressBar(currentStep);
            });
    
            $('#prev3').click(function() {
                $('#form-step-3').addClass('d-none');
                $('#form-step-2').removeClass('d-none');
                currentStep = 2;
                updateProgressBar(currentStep);
            });
        });


          //-----------------------------------------------------------------------------\\
          // detect card type
          function detectCardType(number) {
            const regex = {
                visa: /^4[0-9]{0,}$/,
                mastercard: /^(5[1-5]|2[2-7])[0-9]{0,}$/,
                // amex: /^3[47][0-9]{0,}$/,
                // discover: /^6(?:011|5[0-9]{2})[0-9]{0,}$/,
                // paypal: /^3(?:0[0-5]|[68][0-9])[0-9]{0,}$/,
                // amazonpay: /^3(?:0[0-5]|[68][0-9])[0-9]{0,}$/
            };
    
            for (const [key, pattern] of Object.entries(regex)) {
                if (number.match(pattern)) {
                    return key;
                }
            }
    
            return null;
        }
    
        // Event listener for card number input
        document.getElementById('card-number').addEventListener('input', function() {
            const cardNumber = this.value.replace(/\s+/g, ''); // Remove spaces
            const cardType = detectCardType(cardNumber);
            const cardLogo = document.getElementById('card-logo');
    
            if (cardType) {
                cardLogo.src = `../assets/icons/${cardType}-logo.svg`; // Replace with actual path to logos
                cardLogo.style.display = 'block';
            } else {
                cardLogo.style.display = 'none';
            }
        });

    
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})