export function initCarousel() {
    if (typeof Swiper === 'undefined') return;

    new Swiper('#travelCarousel', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        speed: 700,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        pagination: {
            el: '.carousel-indicators',
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet--active',
        },
    });
}