//This module handles the internationalization (i18n) functionality for the website.
import { translations } from '/js/translations.js';
console.log(translations);

export const applyTranslations = (lang) => {
    const t = translations[lang] || {};
    const set = (attr, fn) =>
        document.querySelectorAll(`[${attr}]`).forEach(el => {
            const key = el.getAttribute(attr);
            if (t[key]) fn(el, t[key]);
        });

    set("data-i18n", (el, val) => (el.textContent = val));
    set("data-i18n-placeholder", (el, val) => el.setAttribute("placeholder", val));
};

export const initLanguageSwitcher = () => {
    const languageSelect = document.getElementById("languageSelect");
    if (languageSelect) {
        languageSelect.addEventListener("change", e => applyTranslations(e.target.value));
        applyTranslations(languageSelect.value);
    }
};