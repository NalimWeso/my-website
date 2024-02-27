let swiper;

function adjustSlidesPerView() {
    const swiperSettings = {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        speed: 300,
        spaceBetween: 10,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        autoplay: {
            enabled: true,
            disableOnInteraction: false,
            delay: 3000
        },
        breakpoints: {
            800: {
                slidesPerView: 1,
            },
            801: {
                slidesPerView: 2
            }
        },
    }

    if (swiper) {
        swiper.destroy();
    }

    swiper = new Swiper('.swiper', swiperSettings);
}

adjustSlidesPerView();

window.addEventListener('resize', adjustSlidesPerView);
