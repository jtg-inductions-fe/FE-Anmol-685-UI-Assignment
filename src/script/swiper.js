const latestReleases = [
    { src: '/assets/images/Arquitetura.webp', alt: 'Book 1' },
    { src: '/assets/images/Construct2.webp', alt: 'Book 2' },
    { src: '/assets/images/Gestão.webp', alt: 'Book 3' },
    { src: '/assets/images/MetricasAgeis.webp', alt: 'Book 4' },
    { src: '/assets/images/Nodejs.webp', alt: 'Book 5' },
    { src: '/assets/images/Portugol.webp', alt: 'Book 6' },
    { src: '/assets/images/ReactNative.webp', alt: 'Book 7' },
    { src: '/assets/images/Tuning.webp', alt: 'Book 8' },
    { src: '/assets/images/UX.webp', alt: 'Book 9' },
];

const slidesWrapper = document.querySelector('.mySwiper .swiper-wrapper');

if (slidesWrapper) {
    latestReleases.forEach((item) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        slide.innerHTML = `
                <img
                    src="${item.src}"
                    alt="${item.alt}"
                    loading="lazy"
                />
            `;

        slidesWrapper.appendChild(slide);
    });
}

if (typeof Swiper !== 'undefined') {
    new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                centeredSlides: false,
                spaceBetween: 32,
            },
        },
    });
} else {
    console.error('Swiper library not found.');
}
