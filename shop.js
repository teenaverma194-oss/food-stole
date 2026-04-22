// Shop page functionality
let currentFilters = {
    category: 'all',
    priceMin: 1000,
    priceMax: 10000,
    sizes: [],
    colors: []
};

let currentSort = 'popularity';

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    loadShopProducts();
    setupFilters();
    setupSorting();
});

function loadShopProducts() {
    const shopGrid = document.getElementById('shop-products-grid');
    shopGrid.innerHTML = '';

    let filteredShoes = shoes.filter(shoe => {
        // Category filter
        if (currentFilters.category !== 'all' && shoe.category !== currentFilters.category) {
            return false;
        }

        // Price filter
        if (shoe.price < currentFilters.priceMin || shoe.price > currentFilters.priceMax) {
            return false;
        }

        return true;
    });

    // Sort products
    filteredShoes = sortProducts(filteredShoes, currentSort);

    filteredShoes.forEach(shoe => {
        const productCard = createShopProductCard(shoe);
        shopGrid.appendChild(productCard);
    });
}

function createShopProductCard(shoe) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}">
        <div class="product-info">
            <h3>${shoe.name}</h3>
            <p class="price">₹${shoe.price}</p>
            <p class="description">${shoe.description}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${shoe.id})">Add to Cart</button>
        </div>
    `;

    return card;
}

function setupFilters() {
    // Price range
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const minPriceDisplay = document.getElementById('min-price');
    const maxPriceDisplay = document.getElementById('max-price');

    priceMin.addEventListener('input', function() {
        minPriceDisplay.textContent = this.value;
        currentFilters.priceMin = parseInt(this.value);
        loadShopProducts();
    });

    priceMax.addEventListener('input', function() {
        maxPriceDisplay.textContent = this.value;
        currentFilters.priceMax = parseInt(this.value);
        loadShopProducts();
    });

    // Size buttons
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const size = this.dataset.size;
            if (this.classList.contains('active')) {
                currentFilters.sizes.push(size);
            } else {
                currentFilters.sizes = currentFilters.sizes.filter(s => s !== size);
            }
            // Note: Size filtering would require size data in shoe objects
        });
    });

    // Color buttons
    const colorBtns = document.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const color = this.dataset.color;
            if (this.classList.contains('active')) {
                currentFilters.colors.push(color);
            } else {
                currentFilters.colors = currentFilters.colors.filter(c => c !== color);
            }
            // Note: Color filtering would require color data in shoe objects
        });
    });

    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function() {
        currentFilters.category = this.value;
        loadShopProducts();
    });
}

function setupSorting() {
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        loadShopProducts();
    });
}

function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'newest':
            return products.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
        case 'popularity':
        default:
            return products; // For now, keep original order as "popularity"
    }
}