const throttle = (fn, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            fn.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const translations = {
    en: {
        title: "G.U.C. Coaching",
        about: "About",
        services: "Services",
        stats: "Stats",
        contact: "Contact",
        heroTitle: "Grow Under Control",
        heroSubtitle: "Elite training. Tailored nutrition. Next-level results.",
        heroCTA: "Start Transformation",
        aboutTitle: "About Me",
        aboutText: "I'm a certified personal trainer with over 8 years of experience helping clients build muscle, burn fat, and master discipline. My mission is to transform not only physiques but lives — with proven methods, tailored support, and relentless energy.",
        servicesTitle: "Services",
        lifestyleCoaching: "Lifestyle Coaching",
        lifestyleText: "Daily habit optimization, stress management, and sustainable routines tailored to your life.",
        supplementGuidance: "Supplement Guidance",
        supplementText: "Personalized supplement plans to support performance, recovery, and health goals.",
        workoutPlans: "Custom Workout Plans",
        workoutText: "Personalized strength and hypertrophy routines tailored to your body and goals.",
        nutritionCoaching: "Nutrition Coaching",
        nutritionText: "Science-based diet plans for fat loss, muscle gain, or competition prep.",
        statsTitle: "My Results",
        clients: "Clients Transformed",
        experience: "Years Experience",
        competitions: "Competitions Coached",
        reviews: "5-Star Reviews",
        statsText: "These numbers reflect more than progress — they represent dedication, transformation, and unstoppable momentum.",
        contactTitle: "Contact",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        footerText: "All rights reserved.",
        footerBuilt: "Built with ❤️ by"
    },
    hu: {
        title: "G.U.C. Coaching",
        about: "Rólam",
        services: "Szolgáltatások",
        stats: "Eredmények",
        contact: "Kapcsolat",
        heroTitle: "Grow Under Control",
        heroSubtitle: "Professzionális edzés. Személyre szabott táplálkozás. Látványos eredmények.",
        heroCTA: "Kezdd el az átalakulást",
        aboutTitle: "Rólam",
        aboutText: "Tanúsított személyi edző vagyok, több mint 8 év tapasztalattal. Segítek az ügyfeleknek izmot építeni, zsírt égetni, és elsajátítani a fegyelmet. Küldetésem, hogy ne csak a testeket, hanem életeket is átalakítsak – bizonyított módszerekkel, személyre szabott támogatással és fáradhatatlan energiával.",
        servicesTitle: "Szolgáltatások",
        lifestyleCoaching: "Életmód Coaching",
        lifestyleText: "Napi szokások optimalizálása, stresszkezelés és fenntartható rutinok az életedhez igazítva.",
        supplementGuidance: "Táplálékkiegészítő Tanácsadás",
        supplementText: "Személyre szabott kiegészítő tervek a teljesítmény, regeneráció és egészség támogatására.",
        workoutPlans: "Egyéni Edzéstervek",
        workoutText: "Személyre szabott erő- és izomnövelő programok a testedhez és céljaidhoz igazítva.",
        nutritionCoaching: "Táplálkozási Tanácsadás",
        nutritionText: "Tudományosan megalapozott étrendek zsírvesztéshez, izomtömeg növeléshez vagy versenyfelkészüléshez.",
        statsTitle: "Eredményeim",
        clients: "Átalakított ügyfelek",
        experience: "Év tapasztalat",
        competitions: "Edzett versenyzők",
        reviews: "5 csillagos értékelés",
        statsText: "Ezek a számok többet jelentenek, mint puszta fejlődés – elkötelezettséget, átalakulást és megállíthatatlan lendületet képviselnek.",
        contactTitle: "Kapcsolat",
        yourName: "Neved",
        yourEmail: "Email címed",
        yourMessage: "Üzeneted",
        sendMessage: "Üzenet küldése",
        footerText: "Minden jog fenntartva.",
        footerBuilt: "❤️-el készítette:"
    },
    nl: {
        title: "G.U.C. Coaching",
        about: "Over Mij",
        services: "Diensten",
        stats: "Resultaten",
        contact: "Contact",
        heroTitle: "Grow Under Control",
        heroSubtitle: "Elite training. Gepersonaliseerde voeding. Resultaten op een hoger niveau.",
        heroCTA: "Start je Transformatie",
        aboutTitle: "Over Mij",
        aboutText: "Ik ben een gecertificeerde personal trainer met meer dan 10 jaar ervaring. Ik help klanten met spieropbouw, vetverlies en het ontwikkelen van discipline. Mijn missie is om niet alleen lichamen, maar levens te transformeren — met bewezen methoden, persoonlijke begeleiding en eindeloze energie.",
        servicesTitle: "Diensten",
        lifestyleCoaching: "Leefstijl Coaching",
        lifestyleText: "Dagelijkse gewoonteoptimalisatie, stressmanagement en duurzame routines aangepast aan jouw leven.",
        supplementGuidance: "Supplement Advies",
        supplementText: "Persoonlijke supplementenplannen ter ondersteuning van prestaties, herstel en gezondheid.",
        workoutPlans: "Aangepaste Trainingsschema's",
        workoutText: "Persoonlijke kracht- en spieropbouwschema’s afgestemd op jouw lichaam en doelen.",
        nutritionCoaching: "Voedingscoaching",
        nutritionText: "Wetenschappelijk onderbouwde dieetplannen voor vetverlies, spiergroei of wedstrijdvoorbereiding.",
        statsTitle: "Mijn Resultaten",
        clients: "Getransformeerde Klanten",
        experience: "Jaren Ervaring",
        competitions: "Begeleide Wedstrijden",
        reviews: "5-sterren Beoordelingen",
        statsText: "Deze cijfers staan voor meer dan vooruitgang — ze vertegenwoordigen toewijding, transformatie en niet te stoppen motivatie.",
        contactTitle: "Contact",
        yourName: "Je Naam",
        yourEmail: "Je E-mailadres",
        yourMessage: "Je Bericht",
        sendMessage: "Bericht Versturen",
        footerText: "Alle rechten voorbehouden.",
        footerBuilt: "Gemaakt met ❤️ door"
    }
};

const applyTranslations = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
};

const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
        applyTranslations(e.target.value);
    });
    applyTranslations(languageSelect.value);
}

const fadeSections = document.querySelectorAll('.fade-section');
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
fadeSections.forEach(section => fadeObserver.observe(section));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const yOffset = -60;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Back to top button
const backToTop = document.getElementById('backToTop');
const scrollIndicator = document.getElementById('scroll-indicator');

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const statsSection = document.getElementById('stats');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, { threshold: 0.5 });
if (statsSection) {
    observer.observe(statsSection);
}

// Scroll indicator and active link highlighting
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const totalScrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percent = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
            scrollIndicator.style.width = percent.toFixed(2) + '%';

            backToTop.classList.toggle('opacity-0', scrollTop <= 300);
            backToTop.classList.toggle('invisible', scrollTop <= 300);

            const sections = document.querySelectorAll('main section[id]');
            let currentId = '';
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const offset = 100;
                const isLast = index === sections.length - 1;
                if (
                    (rect.top <= offset && rect.bottom > offset) ||
                    (isLast && rect.top <= window.innerHeight && rect.bottom <= window.innerHeight)
                ) {
                    currentId = section.id;
                }
            });
            document.querySelectorAll('nav a[href^="#"]').forEach(link => {
                link.classList.remove('text-pink-500');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('text-pink-500');
                }
            });

            ticking = false;
        });
        ticking = true;
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    const isOpen = navLinks.classList.toggle('hidden') === false;
    if (isOpen) {
        navLinks.classList.add('dropdown-menu');
    } else {
        navLinks.classList.remove('dropdown-menu');
    }
});

navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('open');
        navLinks.classList.remove('dropdown-menu');
        navLinks.classList.add('hidden');
    }
});

const counters = document.querySelectorAll('.counter');
let hasCounted = false;
function animateCounters() {
    if (hasCounted) return;
    hasCounted = true;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
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

document.getElementById('year').textContent = new Date().getFullYear();

