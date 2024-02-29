let swiper;

function adjustSwiperView() {
    const swiperSettings = {
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        autoHeight: true,
        centeredSlides: true,
        updateOnWindowResize: false,
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            enabled: window.innerWidth > 801,
            disableOnInteraction: false,
            delay: 3000
        },
        breakpoints: {
            800: {
                slidesPerView: 1
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

function displayButtons() {
    if (window.innerWidth > 801) {
        document.querySelector('.swiper-buttons').style.display = 'none';
    }
    else {
        document.querySelector('.swiper-buttons').style.display = '';
    }
}

function checkWindowSize() {
    adjustSwiperView();
    displayButtons()
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);
