let swiper;

function adjustSlidesPerView() {
    const screenWidth = window.innerWidth;

    const swiperSettings = {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    if (screenWidth <= 800) {
        swiperSettings.slidesPerView = 1;
    } else {
        swiperSettings.slidesPerView = 2;
    }

    if (swiper) {
        swiper.destroy();
    }

    swiper = new Swiper('.swiper', swiperSettings);
}

adjustSlidesPerView();

window.addEventListener('resize', adjustSlidesPerView);
