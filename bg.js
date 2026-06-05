// bg.js — Pixel art yıldız animasyonu: sert kare piksel + orta hızlı yanıp sönme

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.id = "starCanvas";
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;image-rendering:pixelated;";

    // Anti-aliasing'i kapat — sert piksel görünümü için
    ctx.imageSmoothingEnabled = false;

    document.body.prepend(canvas);

    let w, h;
    const stars = [];
    const NUM_STARS = 50; // Seyrek, minimal görünüm

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        ctx.imageSmoothingEnabled = false; // resize sonrası sıfırlanır, tekrar kapat
    }

    window.addEventListener("resize", resize);
    resize();

    class Star {
        constructor() {
            // Koordinatlar tam sayıya yuvarlanır — piksel grid'e oturur
            this.x = Math.floor(Math.random() * w);
            this.y = Math.floor(Math.random() * h);

            // Piksel boyutu: 1x1 veya 2x2 — küçük tutulur
            this.size = Math.random() < 0.25 ? 2 : 1;

            // Orta hız: 0.001–0.003 arasından biraz daha hızlı
            this.speed = Math.random() * 0.004 + 0.002; // 0.002 – 0.006
            this.dir = Math.random() < 0.5 ? 1 : -1;

            this.alpha = Math.random();
            this.minAlpha = 0.05;
            this.maxAlpha = 0.75 + Math.random() * 0.2; // 0.75 – 0.95
        }

        draw() {
            // fillRect ile kare piksel çiz — yuvarlak değil, sert kenar
            ctx.fillStyle = `rgba(224, 248, 250, ${this.alpha})`;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
            this.alpha += this.speed * this.dir;

            if (this.alpha >= this.maxAlpha) {
                this.alpha = this.maxAlpha;
                this.dir = -1;
            } else if (this.alpha <= this.minAlpha) {
                this.alpha = this.minAlpha;
                this.dir = 1;
            }

            this.draw();
        }
    }

    for (let i = 0; i < NUM_STARS; i++) {
        stars.push(new Star());
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        stars.forEach(s => s.update());
        requestAnimationFrame(animate);
    }

    animate();
});
