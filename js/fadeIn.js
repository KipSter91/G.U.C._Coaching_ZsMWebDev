// This module handles the fade-in effect for sections on the page.
export function initFadeSections() {
    
    const fadeSections = document.querySelectorAll(".fade-section");
    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    fadeObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeSections.forEach((section) => fadeObserver.observe(section));
}
