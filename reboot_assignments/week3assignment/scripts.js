$(document).ready(function() {


    //Investigate a better navbar scrolling function
    //$(window).scroll(function(){
    //    if($(window).scrollTop() > $(window).height()){
    //        $(".menu").css({"background-color":"transparent"});   
    //    }
    //})


    //Contact Me Button//
    $("#button1").click(function() {
        document.getElementById("button1").innerHTML = ("Thank you for contacting me.");
        console.log("Contact me button was clicked. Check your email.");
    });

    //CV Download Button//
    $("#button2").click(function() {
        document.getElementById("button2").innerHTML = ("");
        console.log("CV pdf was downloaded.");
    });


    //Owl Carousel//
    $("#owl-example").owlCarousel();



    //Skillbar//
    jQuery(document).ready(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    });

    //Simple Text Rotator//


});
