$(function () {

    $(".slider-service-mobile").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        arrows: false,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {

                    centerPadding: '70px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 376,
                settings: {

                    centerPadding: '10px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(".slider-service-aditional").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        arrows: false,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {

                    centerPadding: '10px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
        ]
    });

    $(".slider-brands").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 7,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    centerMode: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    centerPadding: '30px',
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    centerPadding: '10px',
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            
        ]
    });

});