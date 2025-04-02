//This module handles the hero section animation for the website

import { startBreakEffect } from './logoBreak.js';

export function initHeroAnimation() {
    const logo = document.getElementById("logo-overlay");
    const textContainer = document.getElementById("hero-text");
    const video = document.getElementById("hero-video");
    if (!logo || !textContainer || !video) return;
    
    video.currentTime = 3.5;
    video.play();
    // 1. Logo entry
    logo.classList.add("animate-logo-enter");

    setTimeout(() => {
        logo.classList.remove("animate-logo-enter");
    }, 3000);
    
    setTimeout(() => {
        startBreakEffect();
    }, 2800);
    

    // 3. Text after 3s come back
    setTimeout(() => {
        textContainer.classList.remove("opacity-0");
        textContainer.classList.add("animate-text-in");
    }, 4500);
}
