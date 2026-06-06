document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.id = "starCanvas";
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;image-rendering:pixelated;";

    ctx.imageSmoothingEnabled = false;

    document.body.prepend(canvas);

    let w, h;
    const stars = [];
    const NUM_STARS = 50;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        ctx.imageSmoothingEnabled = false;
    }

    window.addEventListener("resize", resize);
    resize();

    class Star {
        constructor() {
            this.x = Math.floor(Math.random() * w);
            this.y = Math.floor(Math.random() * h);
            this.size = Math.random() < 0.25 ? 2 : 1;
            this.speed = Math.random() * 0.004 + 0.002;
            this.dir = Math.random() < 0.5 ? 1 : -1;
            this.alpha = Math.random();
            this.minAlpha = 0.05;
            this.maxAlpha = 0.75 + Math.random() * 0.2;
        }

        draw() {
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
