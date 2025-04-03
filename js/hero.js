//This module handles the hero section animation for the website
import { startBreakEffect } from './logoBreak.js';
import { delay } from './delay.js';

// Initializes the animated hero section sequence
export async function initHeroAnimation() {
    const logo = document.getElementById("logo-overlay");
    const textContainer = document.getElementById("hero-text");
    const video = document.getElementById("hero-video");

    // Ensure required elements exist
    if (!logo || !textContainer || !video) return;

    // Start video from a specific timestamp
    video.currentTime = 2;
    video.play();

    // 1. Animate logo entry
    logo.classList.add("animate-logo-enter");

    // 2. Wait ~2.8s before triggering break effect
    await delay(2800);
    startBreakEffect();

    // 3. Wait a bit more before removing the logo completely from DOM
    await delay(200);
    logo.remove(); // clean removal

    // 4. Finally, reveal the hero text with fade-in effect
    await delay(1300);
    textContainer.classList.remove("opacity-0");
    textContainer.classList.add("animate-text-in");
}