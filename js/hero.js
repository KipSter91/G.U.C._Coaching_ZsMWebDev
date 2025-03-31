//This module handles the hero section animation for the website
export function initHeroAnimation() {
    const logo = document.getElementById("logo-overlay");
    const textContainer = document.getElementById("hero-text");
    const video = document.getElementById("hero-video");
    video.play();
    if (!logo || !textContainer || !video) return;

    // 1. Logo entry
    logo.classList.add("animate-logo-enter");

    // 2. after 2.5s :logo burst
    setTimeout(() => {
        logo.classList.remove("animate-logo-enter");
        logo.classList.add("animate-logo-burst");
    }, 2500);

    // 3. Text after 3.5s come back
    setTimeout(() => {
        textContainer.classList.remove("opacity-0");
        textContainer.classList.add("animate-text-in");
    }, 3800);
}