const product = { name: 'Farm-Fresh Vine Tomatoes', price: 40, unit: '1 kg' };

const related = [
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
    }
];

const cartCount = document.getElementById('cartCount');
const wishCount = document.getElementById('wishCount');
const relatedGrid = document.getElementById('relatedGrid');
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const totalPrice = document.getElementById('totalPrice');
const addToCart = document.getElementById('addToCart');
const buyNow = document.getElementById('buyNow');
const toast = document.getElementById('toast');
const MAX_QTY = 20;
let quantity = 1;
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateQuantity(next) {
    quantity = Math.min(MAX_QTY, Math.max(1, next));
    qtyValue.textContent = quantity;
    totalPrice.textContent = '₹' + product.price * quantity;
    qtyMinus.disabled = quantity === 1;
    qtyPlus.disabled = quantity === MAX_QTY;
}

function addToCartCount(amount) {
    cartCount.textContent = Number(cartCount.textContent) + amount;
}

function toggleWish(button) {
    const active = button.classList.toggle('active');
    button.setAttribute('aria-pressed', active);
    wishCount.textContent = Number(wishCount.textContent) + (active ? 1 : -1);
}

qtyMinus.addEventListener('click', () => updateQuantity(quantity - 1));
qtyPlus.addEventListener('click', () => updateQuantity(quantity + 1));

addToCart.addEventListener('click', () => {
    addToCartCount(quantity);
    const label = addToCart.querySelector('span');
    label.textContent = 'Added to cart';
    addToCart.disabled = true;
    showToast(quantity + ' × ' + product.name + ' added to your cart');
    setTimeout(() => {
        label.textContent = 'Add to cart';
        addToCart.disabled = false;
    }, 1400);
});

buyNow.addEventListener('click', () => {
    addToCartCount(quantity);
    showToast('Added to cart. Checkout will be available once the backend is connected.');
});

document.getElementById('pdpWish').addEventListener('click', e => toggleWish(e.currentTarget));

relatedGrid.innerHTML = related.map(p => `
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

relatedGrid.addEventListener('click', e => {
    const wish = e.target.closest('.wish');
    const add = e.target.closest('.add-btn');
    if (wish) toggleWish(wish);
    if (add) {
        addToCartCount(1);
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

document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'marketplace.html';
});


updateQuantity(1);
