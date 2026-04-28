/* ============================================================
   SOLKATTEN – main.js
   ============================================================ */

'use strict';

// ── DOM REFERENCES ─────────────────────────────────────────
const navbar        = document.getElementById('navbar');
const navToggle     = document.getElementById('navToggle');
const navLinks      = document.getElementById('navLinks');
const navLinkItems  = document.querySelectorAll('.nav-link');
const fabWrap       = document.getElementById('fabWrap');
const fabMain       = document.getElementById('fabMain');
const kontaktaBtn   = document.getElementById('kontaktaOssBtn');

// ── NAVBAR: SCROLL EFFECT ──────────────────────────────────
function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── NAVBAR: MOBILE TOGGLE ──────────────────────────────────
navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
    });
});

// ── SMOOTH SCROLL ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ── ACTIVE NAV LINK ─────────────────────────────────────────
function updateActiveLink() {
    const sections   = document.querySelectorAll('.section');
    const threshold  = navbar.offsetHeight + 80;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (!link) return;

        if (rect.top <= threshold && rect.bottom > threshold) {
            navLinkItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// ── SCROLL REVEAL (Intersection Observer) ──────────────────
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── HERO PARTICLES ─────────────────────────────────────────
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const count = window.innerWidth < 600 ? 18 : 35;

    for (let i = 0; i < count; i++) {
        const p   = document.createElement('div');
        p.className = 'particle';
        const size   = Math.random() * 2.5 + 0.8;
        p.style.cssText = [
            `left: ${Math.random() * 100}%`,
            `width: ${size}px`,
            `height: ${size}px`,
            `animation-duration: ${Math.random() * 18 + 12}s`,
            `animation-delay: ${Math.random() * 14}s`,
        ].join(';');
        container.appendChild(p);
    }
}
createParticles();

// ── FLOATING ACTION BUTTON (FAB) ───────────────────────────
function toggleFab(force) {
    const isOpen = typeof force === 'boolean' ? force : !fabWrap.classList.contains('open');
    fabWrap.classList.toggle('open', isOpen);
    fabMain.setAttribute('aria-expanded', isOpen);
}

fabMain.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFab();
});

// Close FAB when clicking outside
document.addEventListener('click', (e) => {
    if (!fabWrap.contains(e.target)) {
        toggleFab(false);
    }
});

// Pressing Escape closes FAB and mobile nav
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleFab(false);
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
    }
});

// ── FAB öppnas via kontakt-panel (Facebook-länken har id kontaktaOssBtn) ──
// Inget extra behövs – FAB-knappen är alltid synlig

// ── LEAFLET KARTA ──────────────────────────────────────────
(function initMap() {
    const mapEl = document.getElementById('leafletMap');
    if (!mapEl || typeof L === 'undefined') return;

    const LAT = 56.8795, LNG = 16.6565;

    const map = L.map('leafletMap', {
        center: [LAT, LNG],
        zoom: 16,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true
    });

    // Lager: karta (OpenStreetMap)
    const layerKarta = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '© OpenStreetMap', maxZoom: 19 }
    );

    // Lager: satellit (Esri World Imagery – gratis)
    const layerSatellit = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { attribution: '© Esri', maxZoom: 19 }
    );

    // Starta med kartvyn
    layerKarta.addTo(map);

    // Guldmarkör via egen CSS-cirkel
    const markerIcon = L.divIcon({
        className: '',
        html: `<div style="
            width:16px;height:16px;
            background:#c9a55a;
            border:3px solid #fff;
            border-radius:50%;
            box-shadow:0 0 12px rgba(201,165,90,.8);
        "></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
    L.marker([LAT, LNG], { icon: markerIcon })
     .addTo(map)
     .bindPopup('<b style="font-family:serif;color:#c9a55a">Solkatten</b><br>Storgatan 11, Borgholm')
     .openPopup();

    // Flikar
    const tabKarta    = document.getElementById('tabKarta');
    const tabSatellit = document.getElementById('tabSatellit');

    if (tabKarta && tabSatellit) {
        tabKarta.addEventListener('click', () => {
            map.removeLayer(layerSatellit);
            layerKarta.addTo(map);
            tabKarta.classList.add('active');
            tabSatellit.classList.remove('active');
        });
        tabSatellit.addEventListener('click', () => {
            map.removeLayer(layerKarta);
            layerSatellit.addTo(map);
            tabSatellit.classList.add('active');
            tabKarta.classList.remove('active');
        });
    }

    // Rätta till storleken när sektionen visas
    setTimeout(() => map.invalidateSize(), 300);
    setTimeout(() => map.invalidateSize(), 800);

    // Also invalidate on scroll (in case the section is revealed late)
    window.addEventListener('scroll', () => map.invalidateSize(), { once: true, passive: true });
})();

// ── MENU BLOCK BACKGROUNDS ─────────────────────────────────
(function initMenuBlockBgs() {
    const blocks = document.querySelectorAll('.menu-block');
    const images = [
        'images/img1.jpeg',
        'images/img2.jpeg',
        'images/img3.jpeg',
        'images/img4.jpeg',
        'images/img5.jpeg',
        'images/img6.jpeg',
        'images/img7.jpeg',
    ];

    blocks.forEach((block, i) => {
        const src = images[i % images.length];
        const bg  = document.createElement('div');
        bg.className = 'mb-bg';
        bg.style.backgroundImage = `url('${src}')`;
        block.insertBefore(bg, block.firstChild);

        // Fade in once the image is cached / loaded
        const img = new Image();
        img.onload = () => bg.classList.add('loaded');
        img.src = src;
    });
})();

// ── HERO CAROUSEL ──────────────────────────────────────────
(function initCarousel() {
    const slides   = document.querySelectorAll('.hc-slide');
    const dotsWrap = document.getElementById('hcDots');
    if (!slides.length || !dotsWrap) return;

    let current = 0;
    let timer;

    // Build dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className  = 'hc-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Bild ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    function goTo(n) {
        slides[current].classList.remove('active');
        dotsWrap.children[current].classList.remove('active');
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        dotsWrap.children[current].classList.add('active');
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), 3800);
    }

    resetTimer();
})();

// ── NYHET SPARKLES ─────────────────────────────────────────
(function initSparkles() {
    const container = document.getElementById('nyhetSparkles');
    if (!container) return;
    const count = window.innerWidth < 600 ? 14 : 26;
    for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        const size = Math.random() * 2.8 + 0.8;
        s.style.cssText = [
            `left: ${Math.random() * 100}%`,
            `top: ${Math.random() * 100}%`,
            `width: ${size}px`,
            `height: ${size}px`,
            `animation-duration: ${Math.random() * 5 + 3}s`,
            `animation-delay: ${Math.random() * 6}s`,
        ].join(';');
        container.appendChild(s);
    }
})();

// ── ARTIST MODAL ───────────────────────────────────────────
(function initArtistModal() {
    const overlay  = document.getElementById('artistModalOverlay');
    const openBtn  = document.getElementById('openArtistModal');
    const closeBtn = document.getElementById('closeArtistModal');
    if (!overlay || !openBtn || !closeBtn) return;

    function openModal() {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => closeBtn.focus(), 50);
    }

    function closeModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        openBtn.focus();
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            closeModal();
        }
    });
})();

// ── INITIAL CALL ───────────────────────────────────────────
onScroll();
