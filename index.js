(function ($) {

    $(document)
        .ready(function () {

            // Slider Controller
            $('.main-carousel').flickity({wrapAround: true, autoPlay: true, selectedAttraction: 0.01, friction: 0.20});

            // Toggle active class
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var y = $(this).scrollTop();

                $('.nav__link').each(function (event) {
                    if (y >= $($(this).attr('href')).offset().top - 280) {
                        $('.nav__link')
                            .not(this)
                            .removeClass('active-nav');
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
                    scrollTop: $($.attr(this, 'href'))
                        .offset()
                        .top
                }, 800);
            });

            var count__number = document.getElementById('count__number');
            var count__numberValue = count__number.getAttribute('data-number');
            var count__less = document.getElementById('count__less');
            var count__more = document.getElementById('count__more');
            var reserve = document.getElementById('reservationCard__content');
            var tableClick = document.getElementById('cta');
            var confirm = document.querySelector('.reservationCard__confirmation');

            tableClick.onclick = function () {
                reserve.style.visibility = "visible";
                tableClick.style.display = "none";
            };

            confirm.onclick = function () {
                Swal(
                    'Confirmed!',
                    'See you then!',
                    'success'
                )
            };

            count__less.onclick = function () {
                if (!count__numberValue) {
                    return false;
                } else {
                    count__numberValue--;
                    count__number.innerHTML = count__numberValue;
                }
            };
            count__more.onclick = function () {
                if (count__numberValue > 99) {
                    return false;
                } else {
                    count__numberValue++;
                    count__number.innerHTML = count__numberValue;
                }
            };


        });
    

})(jQuery)
