let swiper;

function adjustSlidesPerView() {
    const swiperSettings = {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
