   
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
        // https://www.linkedin.com/in/atakangk/
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
        });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });



    
