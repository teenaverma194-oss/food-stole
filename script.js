// Shoe Store - Product Database
const shoes = [
    // Sneakers
    {
        id: 1,
        name: "Classic White Sneakers",
        category: "sneakers",
        price: 2999,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        description: "Comfortable white sneakers for everyday wear"
    },
    {
        id: 2,
        name: "Black Running Shoes",
        category: "sports",
        price: 3499,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
        description: "Lightweight running shoes with advanced cushioning"
    },
    {
        id: 3,
        name: "Brown Leather Boots",
        category: "formal",
        price: 4999,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=300&fit=crop",
        description: "Premium leather boots for formal occasions"
    },
    {
        id: 4,
        name: "Casual Sandals",
        category: "sandals",
        price: 1499,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop",
        description: "Comfortable sandals for summer days"
    },
    {
        id: 5,
        name: "Red High Heels",
        category: "women",
        price: 3999,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        description: "Elegant red heels for special occasions"
    },
    {
        id: 6,
        name: "Kids Sports Shoes",
        category: "kids",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        description: "Durable sports shoes for active kids"
    },
    {
        id: 7,
        name: "Men's Formal Oxfords",
        category: "men",
        price: 4499,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=300&fit=crop",
        description: "Classic oxford shoes for professional look"
    },
    {
        id: 8,
        name: "Women's Ballet Flats",
        category: "women",
        price: 2499,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
        description: "Comfortable ballet flats for everyday elegance"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadBestSellers();
    loadNewArrivals();
});

function loadBestSellers() {
    const bestSellersGrid = document.getElementById('best-sellers-grid');
    const bestSellers = shoes.slice(0, 4); // First 4 products as best sellers

    bestSellers.forEach(shoe => {
        const productCard = createProductCard(shoe);
        bestSellersGrid.appendChild(productCard);
    });
}

function loadNewArrivals() {
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const newArrivals = shoes.slice(4, 8); // Next 4 products as new arrivals

    newArrivals.forEach(shoe => {
        const productCard = createProductCard(shoe);
        newArrivalsGrid.appendChild(productCard);
    });
}

function createProductCard(shoe) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}">
        <div class="product-info">
            <h3>${shoe.name}</h3>
            <p class="price">₹${shoe.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${shoe.id})">Add to Cart</button>
        </div>
    `;

    return card;
}

function addToCart(productId) {
    // Simple cart functionality - save to localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${shoes.find(s => s.id === productId).name} to cart!`);
}

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
});
        price: 5999,
        image: "https://images.unsplash.com/photo-1543163521-9efcc06b755e?w=400&h=400&fit=crop",
        description: "Elegant formal footwear for business meetings",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 6,
        name: "Dress Oxford",
        type: "formal",
        gender: "men",
        price: 7499,
        image: "https://images.unsplash.com/photo-1519671482677-de33b75a3440?w=400&h=400&fit=crop",
        description: "Premium oxford dress shoes",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Men's Sports Shoes
    {
        id: 7,
        name: "Performance Runner",
        type: "sports",
        gender: "men",
        price: 5499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Advanced sports shoes for athletes",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 8,
        name: "Trail Master",
        type: "sports",
        gender: "men",
        price: 5899,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
        description: "Rugged trail sports shoes",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Men's Sneakers
    {
        id: 9,
        name: "Street Vibes",
        type: "sneakers",
        gender: "men",
        price: 4199,
        image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop",
        description: "Trendy street sneakers",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 10,
        name: "Retro Kicks",
        type: "sneakers",
        gender: "men",
        price: 3999,
        image: "https://images.unsplash.com/photo-1525966222134-fcaa99a1343a?w=400&h=400&fit=crop",
        description: "Classic retro sneaker design",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Women's Casual Shoes
    {
        id: 11,
        name: "Elegant Comfort",
        type: "casual",
        gender: "women",
        price: 4299,
        image: "https://images.unsplash.com/photo-1595777712802-3c8ea92f8f5a?w=400&h=400&fit=crop",
        description: "Elegant casual shoes for women",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 12,
        name: "Urban Walkway",
        type: "casual",
        gender: "women",
        price: 3999,
        image: "https://images.unsplash.com/photo-1494280390065-cfee7cf880d5?w=400&h=400&fit=crop",
        description: "Comfortable everyday casual shoes",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 13,
        name: "Chic Casual",
        type: "casual",
        gender: "women",
        price: 4499,
        image: "https://images.unsplash.com/photo-1485933035076-9120e4c6f181?w=400&h=400&fit=crop",
        description: "Stylish casual footwear",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Women's Formal Shoes
    {
        id: 14,
        name: "Evening Elegance",
        type: "formal",
        gender: "women",
        price: 5999,
        image: "https://images.unsplash.com/photo-1535148566835-c7ad237b224b?w=400&h=400&fit=crop",
        description: "Sophisticated formal heels",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 15,
        name: "Professional Poise",
        type: "formal",
        gender: "women",
        price: 5499,
        image: "https://images.unsplash.com/photo-1595777712802-3c8ea92f8f5a?w=400&h=400&fit=crop",
        description: "Professional formal shoes for women",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Women's Sports Shoes
    {
        id: 16,
        name: "Fitness Pro",
        type: "sports",
        gender: "women",
        price: 5299,
        image: "https://images.unsplash.com/photo-1495542779398-9e228bee63c1?w=400&h=400&fit=crop",
        description: "Performance sports shoes for women",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },

    // Women's Sneakers
    {
        id: 17,
        name: "Fashion Sneaker",
        type: "sneakers",
        gender: "women",
        price: 3899,
        image: "https://images.unsplash.com/photo-1459262838948-3e2de6c3e206?w=400&h=400&fit=crop",
        description: "Fashionable sneakers for everyday wear",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 18,
        name: "Trendy Steps",
        type: "sneakers",
        gender: "women",
        price: 4099,
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
        description: "Trendy women's sneakers",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    }
];

// Global Variables
let filteredProducts = [...products];
let cart = [];
let favorites = new Set();
let currentProduct = null;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const featuredGrid = document.getElementById('featuredGrid');
const bestSellersGrid = document.getElementById('bestSellersGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const genderFilter = document.getElementById('genderFilter');
const typeFilter = document.getElementById('typeFilter');
const orderModal = document.getElementById('orderModal');
const successModal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close');
const orderForm = document.getElementById('orderForm');
const paymentMethod = document.getElementById('paymentMethod');
const cardDetails = document.getElementById('cardDetails');
const cartCount = document.querySelector('.cart-count');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    displayAllProducts();
    displayFeaturedProducts();
    displayBestSellers();
    setupEventListeners();
    loadFavoritesFromStorage();
    updateFavoritesDisplay();
});

// Setup Event Listeners
function setupEventListeners() {
    genderFilter.addEventListener('change', filterProducts);
    typeFilter.addEventListener('change', filterProducts);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', closeModalOnClick);
    orderForm.addEventListener('submit', handleOrderSubmit);
    paymentMethod.addEventListener('change', toggleCardDetails);
}

// Filter Products
function filterProducts() {
    const gender = genderFilter.value;
    const type = typeFilter.value;

    filteredProducts = products.filter(product => {
        const genderMatch = gender === 'all' || product.gender === gender;
        const typeMatch = type === 'all' || product.type === type;
        return genderMatch && typeMatch;
    });

    displayAllProducts();
}

// Display All Products
function displayAllProducts() {
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="empty-message">No products found</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Display Featured Products (First 6)
function displayFeaturedProducts() {
    featuredGrid.innerHTML = '';
    const featured = products.slice(0, 6);

    featured.forEach(product => {
        const productCard = createProductCard(product);
        featuredGrid.appendChild(productCard);
    });
}

// Display Best Sellers (Random 6)
function displayBestSellers() {
    bestSellersGrid.innerHTML = '';
    const bestSellers = products.sort(() => 0.5 - Math.random()).slice(0, 6);

    bestSellers.forEach(product => {
        const productCard = createProductCard(product);
        bestSellersGrid.appendChild(productCard);
    });
}

// Display Favorites
function updateFavoritesDisplay() {
    favoritesGrid.innerHTML = '';

    if (favorites.size === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">No favorites yet. Click the heart icon to add shoes to your wishlist!</p>';
        return;
    }

    favorites.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const productCard = createProductCard(product);
            favoritesGrid.appendChild(productCard);
        }
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const isFavorited = favorites.has(product.id);

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x400?text=RedTape+Shoe'">
        <div class="product-info">
            <div class="product-header">
                <h3 class="product-name">${product.name}</h3>
            </div>
            <div>
                <span class="product-type">${product.type.toUpperCase()}</span>
                <span class="product-gender">${product.gender}</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
            <div class="product-actions">
                <button class="btn btn-order" onclick="openOrderModal(${product.id})">
                    📦 Order Now
                </button>
                <button class="btn btn-like ${isFavorited ? 'liked' : ''}" onclick="toggleFavorite(${product.id}, this)">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    `;

    return card;
}

// Open Order Modal
function openOrderModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    
    if (!currentProduct) return;

    document.getElementById('modalImage').src = currentProduct.image;
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalProductPrice').textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
    document.getElementById('modalProductDesc').textContent = currentProduct.description;

    document.getElementById('quantity').value = 1;
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('address').value = '';
    document.getElementById('paymentMethod').value = '';
    cardDetails.classList.add('hidden');

    orderModal.style.display = 'block';
}

// Close Modal
function closeModal() {
    orderModal.style.display = 'none';
    successModal.style.display = 'none';
}

// Close Modal on Outside Click
function closeModalOnClick(event) {
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
}

// Toggle Card Details based on Payment Method
function toggleCardDetails() {
    const selectedMethod = paymentMethod.value;
    if (selectedMethod === 'creditcard' || selectedMethod === 'debitcard') {
        cardDetails.classList.remove('hidden');
        document.getElementById('cardNumber').required = true;
        document.getElementById('expiryDate').required = true;
        document.getElementById('cvv').required = true;
    } else {
        cardDetails.classList.add('hidden');
        document.getElementById('cardNumber').required = false;
        document.getElementById('expiryDate').required = false;
        document.getElementById('cvv').required = false;
    }
}

// Handle Order Submission
function handleOrderSubmit(e) {
    e.preventDefault();

    const quantity = parseInt(document.getElementById('quantity').value);
    const size = document.getElementById('size').value;
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const address = document.getElementById('address').value;
    const paymentMethodValue = document.getElementById('paymentMethod').value;

    // Validation
    if (!size || !customerName || !customerEmail || !address || !paymentMethodValue) {
        alert('Please fill in all required fields');
        return;
    }

    // Validate Card Details if Credit/Debit Card
    if (paymentMethodValue === 'creditcard' || paymentMethodValue === 'debitcard') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please enter valid card details');
            return;
        }

        // Basic card validation
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            alert('Card number must be 16 digits');
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            alert('Expiry date must be in MM/YY format');
            return;
        }

        if (cvv.length !== 3) {
            alert('CVV must be 3 digits');
            return;
        }
    }

    // Create Order
    const order = {
        productName: currentProduct.name,
        quantity: quantity,
        size: size,
        price: currentProduct.price,
        totalPrice: currentProduct.price * quantity,
        customerName: customerName,
        customerEmail: customerEmail,
        address: address,
        paymentMethod: getPaymentMethodDisplay(paymentMethodValue),
        orderDate: new Date().toLocaleDateString('en-IN')
    };

    // Add to Cart
    cart.push(order);
    updateCartCount();

    // Show Success Modal
    showSuccessMessage(order);

    // Close Order Modal
    orderModal.style.display = 'none';
}

// Get Payment Method Display
function getPaymentMethodDisplay(value) {
    const methods = {
        'creditcard': 'Credit Card',
        'debitcard': 'Debit Card',
        'paypal': 'PayPal',
        'bankTransfer': 'Bank Transfer',
        'cod': 'Cash on Delivery'
    };
    return methods[value] || value;
}

// Show Success Message
function showSuccessMessage(order) {
    const summary = `
        <strong>Order Details:</strong><br>
        Product: ${order.productName}<br>
        Quantity: ${order.quantity}<br>
        Size: ${order.size}<br>
        Total Amount: ₹${order.totalPrice.toLocaleString('en-IN')}<br>
        Payment Method: ${order.paymentMethod}<br>
        Customer Name: ${order.customerName}<br>
        Delivery Address: ${order.address}<br>
        <strong style="color: #27ae60;">Your order will be delivered within 5-7 business days!</strong>
    `;

    document.getElementById('orderSummary').innerHTML = summary;
    successModal.style.display = 'block';
}

// Toggle Favorite
function toggleFavorite(productId, button) {
    if (favorites.has(productId)) {
        favorites.delete(productId);
        button.classList.remove('liked');
        button.textContent = '🤍';
    } else {
        favorites.add(productId);
        button.classList.add('liked');
        button.textContent = '❤️';
    }
    
    saveFavoritesToStorage();
    updateFavoritesDisplay();
    updateAllProductCards();
}

// Update All Product Cards (for favorite button sync)
function updateAllProductCards() {
    const allButtons = document.querySelectorAll('.btn-like');
    allButtons.forEach(button => {
        const productId = parseInt(button.onclick.match(/\d+/)[0]);
        if (favorites.has(productId)) {
            button.classList.add('liked');
            button.textContent = '❤️';
        } else {
            button.classList.remove('liked');
            button.textContent = '🤍';
        }
    });
}

// Save Favorites to Storage
function saveFavoritesToStorage() {
    const favArray = Array.from(favorites);
    localStorage.setItem('redtapeFavorites', JSON.stringify(favArray));
}

// Load Favorites from Storage
function loadFavoritesFromStorage() {
    const stored = localStorage.getItem('redtapeFavorites');
    if (stored) {
        const favArray = JSON.parse(stored);
        favArray.forEach(id => favorites.add(id));
    }
}

// Update Cart Count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Format Currency
function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}
