//This module is responsible for the counter animation on the stats section of the page
let hasCounted = false;

export function initCounters() {
    const statsSection = document.getElementById("stats");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        },
        { threshold: 0.5 }
    );
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounters() {
    if (hasCounted) return;
    hasCounted = true;

    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}
