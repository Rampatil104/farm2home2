const vegetables = [
    {
        id: 1,
        name: 'Farm-Fresh Vine Tomatoes',
        img: 'tomatoes',
        sub: 'tomatoes',
        badge: 'FRESH TODAY',
        rating: 4.9,
        reviews: 128,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Harvested 4 hours ago',
        price: 40,
        old: 50,
        unit: '1 kg',
        method: 'natural',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 2,
        name: 'Organic Baby Spinach',
        img: 'spinach',
        sub: 'leafy',
        badge: '100% ORGANIC',
        rating: 4.8,
        reviews: 94,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Harvested this morning',
        price: 30,
        unit: '1 bunch',
        method: 'organic',
        today: true,
        saved: true,
        link: 'product.html'
    },
    {
        id: 3,
        name: 'Nashik Red Onions',
        img: 'onions',
        sub: 'onions',
        badge: 'BEST SELLER',
        rating: 4.9,
        reviews: 76,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Harvested yesterday',
        price: 35,
        old: 45,
        unit: '1 kg',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 4,
        name: 'Fresh Potatoes',
        img: 'potatoes',
        sub: 'potatoes',
        badge: 'FARM FRESH',
        rating: 4.7,
        reviews: 61,
        farmer: 'Sunil More',
        place: 'Pune',
        note: 'Freshly harvested',
        price: 32,
        unit: '1 kg',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 5,
        name: 'Green Chillies',
        img: 'chillies',
        sub: 'other',
        badge: 'FRESH TODAY',
        rating: 4.8,
        reviews: 52,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Freshly picked',
        price: 55,
        unit: '500 g',
        method: 'natural',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 6,
        name: 'Lady Finger',
        img: 'okra',
        sub: 'other',
        badge: 'TENDER PICK',
        rating: 4.7,
        reviews: 44,
        farmer: 'Priya Kale',
        place: 'Mumbai',
        note: 'Harvested today',
        price: 48,
        unit: '500 g',
        method: 'organic',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 7,
        name: 'Fresh Carrots',
        img: 'carrots',
        sub: 'root',
        badge: 'SWEET & CRUNCHY',
        rating: 4.8,
        reviews: 83,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Harvested yesterday',
        price: 60,
        unit: '1 kg',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 8,
        name: 'Cucumbers',
        img: 'cucumbers',
        sub: 'other',
        badge: 'COOL & CRISP',
        rating: 4.7,
        reviews: 39,
        farmer: 'Priya Kale',
        place: 'Mumbai',
        note: 'Picked today',
        price: 35,
        unit: '1 kg',
        method: 'natural',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 9,
        name: 'Cauliflower',
        img: 'cauliflower',
        sub: 'other',
        badge: 'FRESH TODAY',
        rating: 4.8,
        reviews: 67,
        farmer: 'Sunil More',
        place: 'Pune',
        note: 'Fresh today',
        price: 45,
        unit: '1 piece',
        method: 'natural',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 10,
        name: 'Fresh Coriander',
        img: 'coriander',
        sub: 'leafy',
        badge: '100% ORGANIC',
        rating: 4.9,
        reviews: 112,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Picked this morning',
        price: 20,
        unit: '1 bunch',
        method: 'organic',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 11,
        name: 'Green Peas',
        img: 'peas',
        sub: 'other',
        badge: 'SEASONAL',
        rating: 4.8,
        reviews: 58,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Seasonal harvest',
        price: 90,
        unit: '500 g',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 12,
        name: 'Cabbage',
        img: 'cabbage',
        sub: 'leafy',
        badge: 'FARM FRESH',
        rating: 4.7,
        reviews: 36,
        farmer: 'Sunil More',
        place: 'Pune',
        note: 'Farm fresh',
        price: 35,
        unit: '1 kg',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 13,
        name: 'Brinjal',
        img: 'brinjal',
        sub: 'other',
        badge: 'GLOSSY & FIRM',
        rating: 4.8,
        reviews: 47,
        farmer: 'Priya Kale',
        place: 'Mumbai',
        note: 'Harvested yesterday',
        price: 42,
        unit: '1 kg',
        method: 'organic',
        today: false,
        saved: false,
        link: 'product.html'
    },
    {
        id: 14,
        name: 'Bottle Gourd',
        img: 'gourd',
        sub: 'other',
        badge: 'TENDER PICK',
        rating: 4.7,
        reviews: 29,
        farmer: 'Ramesh Patil',
        place: 'Nashik',
        note: 'Harvested today',
        price: 38,
        unit: '1 piece',
        method: 'natural',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 15,
        name: 'Fresh Beans',
        img: 'beans',
        sub: 'other',
        badge: 'FRESH TODAY',
        rating: 4.8,
        reviews: 41,
        farmer: 'Suresh Deshmukh',
        place: 'Pune',
        note: 'Picked this morning',
        price: 65,
        unit: '500 g',
        method: 'organic',
        today: true,
        saved: false,
        link: 'product.html'
    },
    {
        id: 16,
        name: 'Radish',
        img: 'radish',
        sub: 'root',
        badge: 'CRISP & PEPPERY',
        rating: 4.7,
        reviews: 33,
        farmer: 'Sunil More',
        place: 'Pune',
        note: 'Harvested yesterday',
        price: 30,
        unit: '500 g',
        method: 'natural',
        today: false,
        saved: false,
        link: 'product.html'
    }
];

const categoryOptions = [
    {
        id: 'all',
        label: 'All vegetables'
    },
    {
        id: 'leafy',
        label: 'Leafy vegetables'
    },
    {
        id: 'root',
        label: 'Root vegetables'
    },
    {
        id: 'tomatoes',
        label: 'Tomatoes'
    },
    {
        id: 'onions',
        label: 'Onions'
    },
    {
        id: 'potatoes',
        label: 'Potatoes'
    }
];
const locationOptions = ['Nashik', 'Pune', 'Mumbai'];
const methodOptions = [{ id: 'organic', label: 'Organic only' }, { id: 'natural', label: 'Natural farming' }];
const priceOptions = [
    {
        id: 'p1',
        label: 'Under ₹50',
        min: 0,
        max: 49
    },
    {
        id: 'p2',
        label: '₹50–₹100',
        min: 50,
        max: 100
    },
    {
        id: 'p3',
        label: '₹100–₹200',
        min: 101,
        max: 200
    },
    {
        id: 'p4',
        label: '₹200+',
        min: 201,
        max: Infinity
    }
];
const availabilityOptions = [
    {
        id: 'today',
        label: 'Available today'
    },
    {
        id: 'recent',
        label: 'Harvested recently'
    }
];

const PAGE_SIZE = 9;
const filters = {
    category: 'all',
    locations: [],
    methods: [],
    prices: [],
    availability: [],
    query: '',
    sort: 'popular',
    page: 1
};

const productGrid = document.getElementById('productGrid');
const pagination = document.getElementById('pagination');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const cartCount = document.getElementById('cartCount');
const wishCount = document.getElementById('wishCount');
const productSearch = document.getElementById('productSearch');
const sortSelect = document.getElementById('sortSelect');
const filterPanel = document.getElementById('filters');
const backdrop = document.getElementById('drawerBackdrop');
const filterToggle = document.getElementById('filterToggle');

function matchesAvailability(p) {
    if (!filters.availability.length) return true;
    return filters.availability.some(a => (a === 'today' ? p.today : !p.today));
}

function matches(p, ignore) {
    const query = filters.query.toLowerCase();
    if (query && !(p.name + ' ' + p.farmer).toLowerCase().includes(query)) return false;
    if (ignore !== 'category' && filters.category !== 'all' && p.sub !== filters.category) return false;
    if (filters.locations.length && !filters.locations.includes(p.place)) return false;
    if (filters.methods.length && !filters.methods.includes(p.method)) return false;
    if (filters.prices.length) {
        const inPriceRange = priceOptions.some(o => {
            return filters.prices.includes(o.id) && p.price >= o.min && p.price <= o.max;
        });
        if (!inPriceRange) return false;
    }
    return matchesAvailability(p);
}

function sortedResults() {
    const list = vegetables.filter(p => matches(p));
    const sorters = {
        popular: (a, b) => a.id - b.id,
        low: (a, b) => a.price - b.price,
        high: (a, b) => b.price - a.price,
        rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
        newest: (a, b) => b.id - a.id
    };
    return list.sort(sorters[filters.sort]);
}

function checkbox(group, id, label, count) {
    const checked = filters[group].includes(id) ? ' checked' : '';
    return `
        <label class="check">
            <input type="checkbox" data-group="${group}" value="${id}"${checked}>${label}<span>${count}</span>
        </label>
    `;
}

function renderFilters() {
    document.getElementById('categoryList').innerHTML = categoryOptions.map(c => {
        const count = vegetables.filter(p => (c.id === 'all' || p.sub === c.id)).length;
        const activeClass = filters.category === c.id ? 'active' : '';
        return `
            <button type="button" data-category="${c.id}" class="${activeClass}">
                ${c.label}<span>${count}</span>
            </button>
        `;
    }).join('');

    document.getElementById('locationList').innerHTML = locationOptions.map(l => {
        const count = vegetables.filter(p => p.place === l).length;
        return checkbox('locations', l, l, count);
    }).join('');

    document.getElementById('methodList').innerHTML = methodOptions.map(m => {
        const count = vegetables.filter(p => p.method === m.id).length;
        return checkbox('methods', m.id, m.label, count);
    }).join('');

    document.getElementById('priceList').innerHTML = priceOptions.map(o => {
        const count = vegetables.filter(p => p.price >= o.min && p.price <= o.max).length;
        return checkbox('prices', o.id, o.label, count);
    }).join('');

    document.getElementById('availabilityList').innerHTML = availabilityOptions.map(a => {
        const count = vegetables.filter(p => (a.id === 'today' ? p.today : !p.today)).length;
        return checkbox('availability', a.id, a.label, count);
    }).join('');
}

function cardHtml(p) {
    return `
    <article class="product-card">
        <div class="product-media">
            <img src="images/products/${p.img}.jpg" alt="${p.name}" loading="lazy">
            <button
                class="wish${p.saved ? ' active' : ''}"
                type="button"
                data-id="${p.id}"
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
            <h3><a href="${p.link}">${p.name}</a></h3>
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
    `;
}

function renderPagination(total) {
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= pages; i++) {
        const isCurrent = i === filters.page;
        const activeClass = isCurrent ? 'active' : '';
        const currentAttr = isCurrent ? ' aria-current="page"' : '';
        html += `<button type="button" data-page="${i}" class="${activeClass}"${currentAttr}>${i}</button>`;
    }

    const isLastPage = filters.page === pages;
    html += `<button type="button" data-page="${filters.page + 1}"${isLastPage ? ' disabled' : ''}>Next</button>`;
    pagination.innerHTML = html;
}

function render() {
    const results = sortedResults();
    const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
    filters.page = Math.min(filters.page, pages);
    const start = (filters.page - 1) * PAGE_SIZE;
    productGrid.innerHTML = results.slice(start, start + PAGE_SIZE).map(cardHtml).join('');
    resultCount.textContent = results.length;
    emptyState.hidden = results.length > 0;
    renderPagination(results.length);
    renderFilters();
    document.querySelectorAll('.product-media img').forEach(img => {
        img.addEventListener('error', () => img.classList.add('img-failed'));
    });
}

function closeDrawer() {
    filterPanel.classList.remove('open');
    backdrop.classList.remove('show');
    filterToggle.setAttribute('aria-expanded', 'false');
}

filterPanel.addEventListener('click', e => {
    const cat = e.target.closest('[data-category]');
    if (cat) {
        filters.category = cat.dataset.category;
        filters.page = 1;
        render();
    }
});

filterPanel.addEventListener('change', e => {
    const input = e.target.closest('input[data-group]');
    if (!input) return;
    const list = filters[input.dataset.group];
    if (input.checked) list.push(input.value);
    else list.splice(list.indexOf(input.value), 1);
    filters.page = 1;
    render();
});

document.getElementById('clearFilters').addEventListener('click', () => {
    filters.category = 'all';
    filters.locations = [];
    filters.methods = [];
    filters.prices = [];
    filters.availability = [];
    filters.query = '';
    filters.page = 1;
    productSearch.value = '';
    document.getElementById('searchInput').value = '';
    render();
});

productSearch.addEventListener('input', () => {
    filters.query = productSearch.value.trim();
    filters.page = 1;
    render();
});

sortSelect.addEventListener('change', () => {
    filters.sort = sortSelect.value;
    filters.page = 1;
    render();
});

pagination.addEventListener('click', e => {
    const btn = e.target.closest('[data-page]');
    if (!btn || btn.disabled) return;
    filters.page = Number(btn.dataset.page);
    render();
    document.querySelector('.controls').scrollIntoView({ behavior: 'smooth' });
});

productGrid.addEventListener('click', e => {
    const wish = e.target.closest('.wish');
    const add = e.target.closest('.add-btn');
    if (wish) {
        const product = vegetables.find(p => p.id === Number(wish.dataset.id));
        product.saved = !product.saved;
        wish.classList.toggle('active', product.saved);
        wish.setAttribute('aria-pressed', product.saved);
        wishCount.textContent = Number(wishCount.textContent) + (product.saved ? 1 : -1);
    }
    if (add) {
        cartCount.textContent = Number(cartCount.textContent) + 1;
        add.lastChild.textContent = 'Added';
        setTimeout(() => {
            add.lastChild.textContent = 'Add';
        }, 1200);
    }
});

filterToggle.addEventListener('click', () => {
    filterPanel.classList.add('open');
    backdrop.classList.add('show');
    filterToggle.setAttribute('aria-expanded', 'true');
});
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('applyFilters').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
});

document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    filters.query = document.getElementById('searchInput').value.trim();
    productSearch.value = filters.query;
    filters.page = 1;
    render();
});


render();
