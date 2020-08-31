/*!

    * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    /*jshint esversion: 6 */




    (function($) {


    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });



    // Scroll to top button appear
    $(document).scroll(function() {
      $('#record').hide();
      $('#stopRecord').hide();
      $('#uploadRecord').hide();


      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });


    $(document).ready(function() {
  $(".modal_button_story1_self").click(function() {
    $('.modal_button_self').hide();
    $('#story1').attr("style", "");
  });

  $(".modal_button_story2_self").click(function() {
    $('.modal_button_self').hide();
    $('#story2').attr("style", "");
  });

  $(".modal_button_story3_self").click(function() {
    $('.modal_button_self').hide();
    $('#story3').attr("style", "");
  });

  $(".modal_button_story4_self").click(function() {
    $('.modal_button_self').hide();
    $('#story4').attr("style", "");
  });

  $(".modal_button_story5_self").click(function() {
    $('.modal_button_self').hide();
    $('#story5').attr("style", "");
  });

  $(".close_self").click(function() {
    $('.modal_button_self').attr("style", "");
    $('#example_com').hide();
    $('#example_net').hide();
    $('#record_self').show();
    $('#start_recording').hide();
    $('#stop_recording').hide();
    window.location.reload();

  });

  //-------

  $(".record_self").click(function() {
    $('#record_self').hide();
    $(".close_self").show();
    $('#record').show();
    $('#stopRecord').show();
    $('#uploadRecord').show();


});

});
  })(jQuery);
 // End of use strict

 var audioToUpload = Blob;


 navigator.mediaDevices.getUserMedia({audio:true})
   .then(stream => {handlerFunction(stream)})


         function handlerFunction(stream) {
         rec = new MediaRecorder(stream);
         rec.ondataavailable = e => {
           audioChunks.push(e.data);
           if (rec.state == "inactive"){
             let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
             recordedAudio.src = URL.createObjectURL(blob);
             recordedAudio.controls=true;
             sendData(blob)
             audioToUpload = blob

           }
         }
       }
             function sendData(data) {}

     record.onclick = e => {
       console.log('I was clicked')
       record.disabled = true;
       record.style.backgroundColor = "blue"
       stopRecord.disabled=false;
       audioChunks = [];
       rec.start();
     }
     stopRecord.onclick = e => {
       console.log("I was clicked")
       record.disabled = false;
       stop.disabled=true;
       record.style.backgroundColor = "red"
       rec.stop();
     }
