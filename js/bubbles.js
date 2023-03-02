jQuery(document).ready(function () {
    var bubbles = jQuery('.carousel-bubbles').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        cssEase: 'linear',
        speed: 400,
        asNavFor: '.carousel-body',
        lazyLoad: false,
        nextArrow: jQuery('.wrapper-carousel-bubbles .slick-next'),
        prevArrow: jQuery('.wrapper-carousel-bubbles .slick-prev'),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    bubbles.on('afterChange', function (event, slick, currentSlide) {
        jQuery('.wrapper-carousel-bubbles .slick-prev').removeClass('disable');
        jQuery('.wrapper-carousel-bubbles .slick-next').removeClass('disable');

        if (currentSlide - 1 < 0) {
            jQuery('.wrapper-carousel-bubbles .slick-prev').addClass('disable');
        }
        if (slick.slideCount === currentSlide + 1) {
            jQuery('.wrapper-carousel-bubbles .slick-next').addClass('disable');
            jQuery('.wrapper-carousel-bubbles .wrapper-buttons').addClass('finish');
            if (!jQuery('.wrapper-carousel-bubbles .wrapper-buttons div.line-fade').length) {
                jQuery('<div>', {
                    class: 'line-fade',
                }).appendTo('.wrapper-carousel-bubbles .wrapper-buttons');
            }
        }
        if (slick.slideCount !== currentSlide + 1) {
            jQuery('.wrapper-carousel-bubbles .wrapper-buttons').removeClass('finish');
        }
    });
    bubbles.on('init', function (event, slick, currentSlide) {
        jQuery('.wrapper-carousel-bubbles .slick-prev').addClass('disable');
    });
    jQuery('.wrapper-carousel-bubbles .wrapper.slick-slide').on('click', function () {
        bubbles.slick('slickGoTo', jQuery(this).attr('data-slick-index'), true);
        jQuery('.carousel-body').slick('slickGoTo', jQuery(this).attr('data-slick-index'), true);
    });

    jQuery('.carousel-body').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.carousel-bubbles',
    });
})