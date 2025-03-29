//This module handles the scroll effects for the website, including the back-to-top button and scroll progress indicator.
let ticking = false;
let backToTopTimeout;

export function initScrollEffects() {
    const backToTop = document.getElementById("backToTop");
    const scrollIndicator = document.getElementById("scroll-indicator");

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY || window.pageYOffset;
                const totalScrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const percent = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
                scrollIndicator.style.width = percent.toFixed(2) + "%";

                if (scrollTop > 300) {
                    backToTop.classList.remove("opacity-0", "invisible");
                    backToTop.classList.add("opacity-100", "visible", "appear");

                    clearTimeout(backToTopTimeout);
                    backToTopTimeout = setTimeout(() => {
                        backToTop.classList.add("opacity-0", "invisible");
                        backToTop.classList.remove("opacity-100", "visible");
                    }, 2000);
                } else {
                    backToTop.classList.add("opacity-0", "invisible");
                    backToTop.classList.remove("opacity-100", "visible");
                    clearTimeout(backToTopTimeout);
                }

                highlightActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
}


function highlightActiveSection() {
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "";
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const offset = 100;
        const isLast = index === sections.length - 1;
        if ((rect.top <= offset && rect.bottom > offset) ||
            (isLast && rect.top <= window.innerHeight && rect.bottom <= window.innerHeight)) {
            currentId = section.id;
        }
    });
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove("text-pink-500");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("text-pink-500");
        }
    });
}
