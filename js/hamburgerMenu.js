//This module handles the hamburger menu functionality for mobile navigation.
export function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        }
    });

    document.addEventListener("click", (e) => {
        const isClickInsideMenu = navLinks.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains("open")) {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        }
    });
}