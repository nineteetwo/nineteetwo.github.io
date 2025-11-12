document.addEventListener('DOMContentLoaded', function () {

    /* --------------------------------- */
    /* --- 1. HERO CAROUSEL KODUNUZ --- */
    /* --------------------------------- */
    const slides = document.querySelectorAll('.hero-carousel .slide');
    let currentIndex = 0;
    const slideInterval = 5000; // 5 saniyede bir değişir

    function showSlide(index) {
        slides.forEach((slide, i) => {
            // Aktif olan slayta 'data-active' özniteliğini 'true' yap
            slide.setAttribute('data-active', i === index ? 'true' : 'false');
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Eğer slayt varsa, ilkini göster ve zamanlayıcıyı başlat
    if (slides.length > 0) {
        showSlide(currentIndex);
        setInterval(nextSlide, slideInterval);
    }


    /* ------------------------------------------- */
    /* --- 2. YENİ EKLENEN HAMBURGER MENÜ KODU --- */
    /* ------------------------------------------- */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    // Hamburger butonuna tıklandığında...
    hamburgerBtn.addEventListener('click', () => {
        // ...navigasyon menüsüne 'active' sınıfını ekle veya kaldır
        navLinks.classList.toggle('active');
        
        // ...butonun kendisine de 'active' sınıfını ekle (X animasyonu için)
        hamburgerBtn.classList.toggle('active');
    });

});