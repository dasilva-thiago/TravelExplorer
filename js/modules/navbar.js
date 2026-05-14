export function initNavbar() {
    const heroSearchBar = document.querySelector('.hero-search-section .search-bar');
    const nav = document.querySelector('nav');

    if (!heroSearchBar || !nav) return;

    const observer = new IntersectionObserver(
        ([entry]) => nav.classList.toggle('nav--search-active', !entry.isIntersecting),
        { threshold: 0 }
    );

    observer.observe(heroSearchBar);
}