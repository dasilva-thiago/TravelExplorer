const heroSearchBar = document.querySelector('.hero-search-section .search-bar');
const nav = document.querySelector('nav');

const observer = new IntersectionObserver(
    ([entry]) => {
        nav.classList.toggle('nav--search-active', !entry.isIntersecting);
    },
    { threshold: 0 }
);

if (heroSearchBar) observer.observe(heroSearchBar);