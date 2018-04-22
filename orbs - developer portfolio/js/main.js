$(document).ready(function(){
  // Add scrollspy to <body>   

  // Add smooth scrolling on all links inside the navbar
  $(".mynav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  //
  $('.portfolio-filter li').click(function(){
    var selector = $(this).attr('class');
    
    $(".portfolio-filter li").removeClass("active");
    $(this).addClass("active");
     
    if (selector == 'all') {
        $('#list-area').children('div').removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $('#list-area').children('div').addClass('is-animated').fadeIn();
        });
    } else {
        $('#list-area').children('div:not(.' + selector + ')').removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $('#list-area').children('div.' + selector).addClass('is-animated').fadeIn();
        });
    }
      return false;
  });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("nav").style.background = "#fff";
        document.getElementById("mylink").style.color = "#000";
        document.getElementById("mylink1").style.color = "#000";
        document.getElementById("mylink2").style.color = "#000";
        document.getElementById("mylink3").style.color = "#000";
        document.getElementById("mylink4").style.color = "#000";
        document.getElementById("mylink5").style.color = "#000";
        document.getElementById("mylink6").style.color = "#000";
        document.getElementById("toggler").style.color = "#000";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("nav").style.background = "transparent";
        document.getElementById("mylink").style.color = "#fff";
        document.getElementById("mylink1").style.color = "#fff";
        document.getElementById("mylink2").style.color = "#fff";
        document.getElementById("mylink3").style.color = "#fff";
        document.getElementById("mylink4").style.color = "#fff";
        document.getElementById("mylink5").style.color = "#fff";
        document.getElementById("mylink6").style.color = "#fff";
        document.getElementById("toggler").style.color = "#fff";
    }
}

//Scroll Function//
$(document).ready(function(){

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
          $(this).addClass("slide");
        }
    });
  });
});

$(document).ready(function(){

  $(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
          $(this).addClass("slide1");
        }
    });
  });
});