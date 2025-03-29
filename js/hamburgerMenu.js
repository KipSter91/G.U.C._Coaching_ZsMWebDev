//This module handles the hamburger menu functionality for mobile navigation.
export function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        const isOpen = navLinks.classList.toggle("hidden") === false;
        if (isOpen) {
            navLinks.classList.add("dropdown-menu");
        } else {
            navLinks.classList.remove("dropdown-menu");
        }
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            hamburger.classList.remove("open");
            navLinks.classList.remove("dropdown-menu");
            navLinks.classList.add("hidden");
        }
    });

    document.addEventListener("click", (e) => {
        const isClickInsideMenu = navLinks.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        if (!isClickInsideMenu && !isClickOnHamburger && !navLinks.classList.contains("hidden")) {
            hamburger.classList.remove("open");
            navLinks.classList.remove("dropdown-menu");
            navLinks.classList.add("hidden");
        }
    });
}
