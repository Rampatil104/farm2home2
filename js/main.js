const categories = [
    {
        name: 'Vegetables',
        href: 'vegetables.html',
        items: 46,
        icon: '🥬',
        bg: '#e3f1e0'
    },
    {
        name: 'Fruits',
        href: 'fruits.html',
        items: 32,
        icon: '🍊',
        bg: '#fdebd6'
    },
    {
        name: 'Dairy',
        href: 'dairy.html',
        items: 18,
        icon: '🥛',
        bg: '#fdf3d0'
    },
    {
        name: 'Grains & staples',
        href: 'grains.html',
        items: 24,
        icon: '🌾',
        bg: '#f5e8d3'
    },
    {
        name: 'Oils & spices',
        href: 'oils-spices.html',
        items: 29,
        icon: '🫙',
        bg: '#fdf0b8'
    },
    {
        name: 'Seeds',
        href: 'seeds.html',
        items: 12,
        icon: '🌱',
        bg: '#e3f1e0'
    }
];

const products = [
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
        saved: false
    },
    {
        name: 'Organic Baby Spinach',
        img: 'spinach',
        badge: '100% ORGANIC',
        rating: 4.8,
        reviews: 94,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Harvested this morning',
        price: 30,
        unit: '1 bunch',
        saved: true
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
        saved: false
    },
    {
        name: 'Alphonso Mangoes',
        img: 'mangoes',
        badge: 'SEASONAL SPECIAL',
        rating: 4.7,
        reviews: 62,
        farmer: 'Anand Shinde',
        place: 'Sangli',
        note: 'Ready to ripen',
        price: 180,
        old: 220,
        unit: '1 kg',
        saved: false
    },
    {
        name: 'Pomegranate Arils',
        img: 'pomegranate',
        badge: 'TOP RATED',
        rating: 4.9,
        reviews: 110,
        farmer: 'Meera Jadhav',
        place: 'Ahmednagar',
        note: 'Packed today',
        price: 140,
        unit: '1 kg',
        saved: true
    },
    {
        name: 'A2 Cow Milk',
        img: 'milk',
        badge: 'MORNING MILKING',
        rating: 4.8,
        reviews: 88,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Chilled & sealed',
        price: 72,
        unit: '1 litre',
        saved: false
    },
    {
        name: 'Kolhapuri Jaggery',
        img: 'jaggery',
        badge: 'SMALL BATCH',
        rating: 4.8,
        reviews: 57,
        farmer: 'Anand Shinde',
        place: 'Kolhapur',
        note: 'Made this week',
        price: 120,
        unit: '1 kg',
        saved: false
    },
    {
        name: 'Basmati Rice',
        img: 'rice',
        badge: 'NATURALLY GROWN',
        rating: 4.6,
        reviews: 41,
        farmer: 'Kavita Pawar',
        place: 'Pune',
        note: 'Harvest 2025',
        price: 145,
        old: 165,
        unit: '2 kg',
        saved: false
    }
];

const categoryGrid = document.getElementById('categoryGrid');
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const wishCount = document.getElementById('wishCount');

categoryGrid.innerHTML = categories.map(c => `
    <button class="category-card" type="button" data-href="${c.href}">
        <span class="cat-icon" style="background:${c.bg}" aria-hidden="true">${c.icon}</span>
        <h3>${c.name}</h3>
        <p>${c.items} items</p>
        <svg class="icon" aria-hidden="true"><use href="#i-chev"/></svg>
    </button>
`).join('');

productGrid.innerHTML = products.map(p => `
    <article class="product-card">
        <div class="product-media">
            <img src="images/products/${p.img}.jpg" alt="${p.name}" loading="lazy">
            <button
                class="wish${p.saved ? ' active' : ''}"
                type="button"
                aria-pressed="${p.saved}"
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
            <h3>${p.name}</h3>
            <p class="product-farm"><svg class="icon"><use href="#i-pin"/></svg>${p.farmer} · ${p.place}</p>
            <p class="product-fresh">${p.note}</p>
            <div class="product-foot">
                <div class="price">
                    <strong>₹${p.price}</strong> <span>/ ${p.unit}</span>${p.old ? `<s>₹${p.old}</s>` : ''}
                </div>
                <button class="add-btn" type="button">
                    <svg class="icon"><use href="#i-plus"/></svg>Add
                </button>
            </div>
        </div>
    </article>
`).join('');

categoryGrid.addEventListener('click', e => {
    const card = e.target.closest('.category-card');
    if (card) window.location.href = card.dataset.href;
});

productGrid.addEventListener('click', e => {
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

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
});
mainNav.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a === e.target));
    }
});

document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const term = document.getElementById('searchInput').value.trim().toLowerCase();
    const match = products.findIndex(p => p.name.toLowerCase().includes(term));
    if (term && match >= 0) {
        const card = productGrid.children[match];
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.outline = '2px solid #e8730c';
        setTimeout(() => {
            card.style.outline = '';
        }, 1600);
    }
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterNote = document.getElementById('newsletterNote');
newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.value.trim());
    newsletterEmail.classList.toggle('invalid', !valid);
    newsletterNote.textContent = valid
        ? 'Thanks for joining the list!'
        : 'Please enter a valid email address.';
    if (valid) newsletterForm.reset();
});
