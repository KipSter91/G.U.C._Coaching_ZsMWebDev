//This module handles the logo break effect animation for the website
export function startBreakEffect() {
    const imgElement = document.getElementById("logo-overlay");
    if (!imgElement) return;

    // Get position and size
    const rect = imgElement.getBoundingClientRect();
    const imageURL = imgElement.src;
    const imageWidth = rect.width;
    const imageHeight = rect.height;
    const clickPosition = [imageWidth / 2, imageHeight / 2];

    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = `${rect.top + window.scrollY - (imageHeight - rect.height) / 2}px`;
    container.style.left = `${rect.left + window.scrollX - (imageWidth - rect.width) / 2}px`;
    container.style.width = `${imageWidth}px`;
    container.style.height = `${imageHeight}px`;
    container.style.pointerEvents = "none";
    container.style.zIndex = 9999;
    container.style.overflow = "visible";
    container.style.perspective = "1000px";
    document.body.appendChild(container);

    // Hide original image
    imgElement.style.opacity = 0;

    let image;
    let vertices = [], indices = [], fragments = [];

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
        image = img;
        triangulate();
        shatter();
    };
    img.src = imageURL;

    function triangulate() {
        const TWO_PI = Math.PI * 2;
        const rings = [
            { r: 50, c: 12 },
            { r: 150, c: 12 },
            { r: 300, c: 12 },
            { r: 1200, c: 12 },
        ];
        const centerX = clickPosition[0];
        const centerY = clickPosition[1];

        vertices.push([centerX, centerY]);

        rings.forEach(ring => {
            for (let i = 0; i < ring.c; i++) {
                const angle = (i / ring.c) * TWO_PI;
                const radius = ring.r;
                const variance = radius * 0.25;
                const x = Math.cos(angle) * radius + centerX + randomRange(-variance, variance);
                const y = Math.sin(angle) * radius + centerY + randomRange(-variance, variance);
                vertices.push([clamp(x, 0, imageWidth), clamp(y, 0, imageHeight)]);
            }
        });

        indices = Delaunay.triangulate(vertices);
    }

    function shatter() {
        for (let i = 0; i < indices.length; i += 3) {
            const p0 = vertices[indices[i]];
            const p1 = vertices[indices[i + 1]];
            const p2 = vertices[indices[i + 2]];

            const fragment = new Fragment(p0, p1, p2);
            const dx = fragment.centroid[0] - clickPosition[0];
            const dy = fragment.centroid[1] - clickPosition[1];
            const d = Math.sqrt(dx * dx + dy * dy);
            const delay = d * 0.003 * randomRange(0.9, 1.1);

            gsap.to(fragment.canvas, {
                z: 1000,
                rotationX: 30 * Math.sign(dy),
                rotationY: 90 * -Math.sign(dx),
                opacity: 1,
                duration: 2,
                delay,
                ease: "power2.in",
                onComplete: () => container.removeChild(fragment.canvas),
            });

            container.appendChild(fragment.canvas);
            fragments.push(fragment);
        }

        // Clean up container after anim
        setTimeout(() => {
            document.body.removeChild(container);
        }, 3000);
    }

    class Fragment {
        constructor(v0, v1, v2) {
            this.v0 = v0;
            this.v1 = v1;
            this.v2 = v2;
            this.computeBox();
            this.computeCentroid();
            this.createCanvas();
            this.clip();
        }

        computeBox() {
            const xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]);
            const xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]);
            const yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]);
            const yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

            this.box = {
                x: xMin,
                y: yMin,
                w: xMax - xMin,
                h: yMax - yMin,
            };
        }

        computeCentroid() {
            this.centroid = [
                (this.v0[0] + this.v1[0] + this.v2[0]) / 3,
                (this.v0[1] + this.v1[1] + this.v2[1]) / 3,
            ];
        }

        createCanvas() {
            const canvas = document.createElement("canvas");
            canvas.width = this.box.w;
            canvas.height = this.box.h;
            canvas.style.position = "absolute";
            canvas.style.left = this.box.x + "px";
            canvas.style.top = this.box.y + "px";
            canvas.style.pointerEvents = "none";
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
        }

        clip() {
            this.ctx.translate(-this.box.x, -this.box.y);
            this.ctx.beginPath();
            this.ctx.moveTo(this.v0[0], this.v0[1]);
            this.ctx.lineTo(this.v1[0], this.v1[1]);
            this.ctx.lineTo(this.v2[0], this.v2[1]);
            this.ctx.closePath();
            this.ctx.clip();
            this.ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
        }
    }

    function clamp(x, min, max) {
        return Math.max(min, Math.min(x, max));
    }

    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }
}
