const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
});

document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'marketplace.html';
});
