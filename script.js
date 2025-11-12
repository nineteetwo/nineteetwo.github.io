document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-carousel .slide');
    let currentIndex = 0;
    const slideInterval = 5000; 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.setAttribute('data-active', i === index ? 'true' : 'false');
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    if (slides.length > 0) {
        showSlide(currentIndex);
    }

    setInterval(nextSlide, slideInterval);
});