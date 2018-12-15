(function($){

  $(document).ready(function(){

    // Slider Controller
    $('.main-carousel').flickity({
      wrapAround: true,
      autoPlay: true,
      selectedAttraction: 0.01,
      friction: 0.20
    });

    // Toggle active class
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var y = $(this).scrollTop();

      $('.nav__link').each(function (event) {
        if (y >= $($(this).attr('href')).offset().top - 280) {
            $('.nav__link').not(this).removeClass('active-nav');
            $(this).addClass('active-nav');
        }
      });

      // Show/Hide navigation
      if (scroll >= 800) {
          $('.nav').addClass('sticky');
      } else {
          $('.nav').removeClass('sticky');
      }
    });

    // Smooth Scrolling
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // Uncheck checkbox by clicking nav-link
    $('a#phone-link').click(function() {
      $('#nav-toggle').attr('checked', false);
    });

    // Toggle active class phone
    $('#phoneNavigation a').click(function() {
      $('#phoneNavigation a').removeClass('active-nav');
      $(this).addClass('active-nav');
    });

 });

})(jQuery)
