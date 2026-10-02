const sideToggle = document.getElementById('sideToggle');
const sideMenu = document.getElementById('sideMenu');
const toast = document.getElementById('toast');
let toastTimer;

sideToggle.addEventListener('click', () => {
    const open = sideMenu.classList.toggle('open');
    sideToggle.setAttribute('aria-expanded', open);
});

document.addEventListener('click', e => {
    const link = e.target.closest('a[data-soon]');
    if (!link) return;
    e.preventDefault();
    const label = link.textContent.trim().replace(/\d+$/, '').trim();
    toast.textContent = label + ' is coming soon';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
});
