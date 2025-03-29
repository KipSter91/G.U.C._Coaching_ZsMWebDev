//This module is the main entry point for the website's JavaScript functionality.
import { initLanguageSwitcher } from './i18n.js';
import { initScrollEffects } from './scrollEffects.js';
import { initHamburgerMenu } from './hamburgerMenu.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initFadeSections } from './fadeIn.js';
import { initCounters } from './resultCounters.js';

initLanguageSwitcher();
initScrollEffects();
initHamburgerMenu();
initSmoothScroll();
initFadeSections();
initCounters();

document.getElementById("year").textContent = new Date().getFullYear();
