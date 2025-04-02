//This module is the main entry point for the website's JavaScript functionality.
import { initLanguageSwitcher } from './i18n.js';
import { initScrollEffects } from './scrollEffects.js';
import { initHamburgerMenu } from './hamburgerMenu.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initFadeSections } from './fadeIn.js';
import { initCounters } from './resultCounters.js';
import { createServiceModal, openServiceModal } from "./modal.js";
import { servicesModal } from "./services.js";
import { initHeroAnimation } from './hero.js';

document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimation();
});

initLanguageSwitcher();
initScrollEffects();
initHamburgerMenu();
initSmoothScroll();
initFadeSections();
initCounters();
createServiceModal();


document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-service]").forEach((el) => {
    el.addEventListener("click", () => {
        const key = el.dataset.service;
        openServiceModal(servicesModal[key]);
    });
});