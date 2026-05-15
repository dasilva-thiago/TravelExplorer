export function initRegisterCarousel() {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper não foi carregado corretamente.');
        return;
    }

    new Swiper('.register-carousel', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1500, 
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        grabCursor: true, 
    });
}