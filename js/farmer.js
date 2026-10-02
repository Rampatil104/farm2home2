const harvest = [
    {
        name: 'Farm-Fresh Vine Tomatoes',
        img: 'tomatoes',
        badge: 'FRESH TODAY',
        rating: 4.9,
        reviews: 128,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Harvested 4 hours ago',
        price: 40,
        old: 50,
        unit: '1 kg',
        link: 'product.html'
    },
    {
        name: 'Nashik Red Onions',
        img: 'onions',
        badge: 'BEST SELLER',
        rating: 4.9,
        reviews: 76,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Harvested yesterday',
        price: 35,
        old: 45,
        unit: '1 kg',
        link: 'product.html'
    },
    {
        name: 'Green Grapes',
        img: 'grapes',
        badge: 'VINE FRESH',
        rating: 4.8,
        reviews: 71,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Picked yesterday',
        price: 110,
        old: 135,
        unit: '1 kg',
        link: 'product.html'
    }
];

const harvestGrid = document.getElementById('harvestGrid');
const cartCount = document.getElementById('cartCount');
const wishCount = document.getElementById('wishCount');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

harvestGrid.innerHTML = harvest.map(p => `
    <article class="product-card">
        <div class="product-media">
            <img src="images/products/${p.img}.jpg" alt="${p.name}" loading="lazy">
            <button
                class="wish"
                type="button"
                aria-pressed="false"
                aria-label="Save ${p.name}"
            >
                <svg class="icon"><use href="#i-heart"/></svg>
            </button>
            <span class="badge">${p.badge}</span>
        </div>
        <div class="product-body">
            <div class="product-rating">
                <span class="star">★</span>${p.rating.toFixed(1)} (${p.reviews})
            </div>
            <h3><a href="${p.link}">${p.name}</a></h3>
            <p class="product-farm"><svg class="icon"><use href="#i-pin"/></svg>${p.farmer} · ${p.place}</p>
            <p class="product-fresh">${p.note}</p>
            <div class="product-foot">
                <div class="price">
                    <strong>₹${p.price}</strong> <span>/ ${p.unit}</span><s>₹${p.old}</s>
                </div>
                <button class="add-btn" type="button">
                    <svg class="icon"><use href="#i-plus"/></svg>Add
                </button>
            </div>
        </div>
    </article>
`).join('');

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => img.classList.add('img-failed'));
});

harvestGrid.addEventListener('click', e => {
    const wish = e.target.closest('.wish');
    const add = e.target.closest('.add-btn');
    if (wish) {
        const active = wish.classList.toggle('active');
        wish.setAttribute('aria-pressed', active);
        wishCount.textContent = Number(wishCount.textContent) + (active ? 1 : -1);
    }
    if (add) {
        cartCount.textContent = Number(cartCount.textContent) + 1;
        add.lastChild.textContent = 'Added';
        setTimeout(() => {
            add.lastChild.textContent = 'Add';
        }, 1200);
    }
});

document.getElementById('messageFarmer').addEventListener('click', () => {
    showToast('Messaging Ramesh will be available once the backend is connected.');
});

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
