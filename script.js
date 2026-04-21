// Junk Food Paradise - Product Database
const foods = [
    // Burgers
    {
        id: 1,
        name: "Classic Cheeseburger",
        category: "burgers",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
        description: "Juicy beef patty with melted cheese and fresh veggies"
    },
    {
        id: 2,
        name: "Bacon Burger Supreme",
        category: "burgers",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
        description: "Crispy bacon, double patties, and all the toppings"
    },
    {
        id: 3,
        name: "Mushroom Swiss Burger",
        category: "burgers",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1571407614652-ec28fe8e8cb9?w=400&h=400&fit=crop",
        description: "Sautéed mushrooms and melted Swiss cheese"
    },

    // Pizza
    {
        id: 4,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop",
        description: "Classic pepperoni with mozzarella on crispy crust"
    },
    {
        id: 5,
        name: "Supreme Meat Lovers",
        category: "pizza",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
        description: "Pepperoni, sausage, bacon, and ham"
    },
    {
        id: 6,
        name: "Cheese Stuffed Crust",
        category: "pizza",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1575866519007-11549a8936cf?w=400&h=400&fit=crop",
        description: "Extra cheese baked right into the crust edges"
    },

    // Snacks
    {
        id: 7,
        name: "Golden French Fries",
        category: "snacks",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1583162088688-d0213dc5d969?w=400&h=400&fit=crop",
        description: "Crispy on the outside, fluffy on the inside"
    },
    {
        id: 8,
        name: "Loaded Nachos",
        category: "snacks",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1599599810694-b4af21b8b811?w=400&h=400&fit=crop",
        description: "Tortilla chips loaded with cheese, jalapeños, and more"
    },
    {
        id: 9,
        name: "Chicken Wings Combo",
        category: "snacks",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1608039891528-151b79624ba9?w=400&h=400&fit=crop",
        description: "12 pieces of crispy, spicy wings with dipping sauce"
    },

    // Desserts
    {
        id: 10,
        name: "Chocolate Milkshake",
        category: "desserts",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1595521624311-8e9d8bf2b70e?w=400&h=400&fit=crop",
        description: "Thick and creamy chocolate shake with whipped cream"
    },
    {
        id: 11,
        name: "Deep Fried Oreos",
        category: "desserts",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1585518019940-cf5e9b95f54a?w=400&h=400&fit=crop",
        description: "Crispy fried coating with melted Oreo cookies inside"
    },
    {
        id: 12,
        name: "Caramel Brownie Sundae",
        category: "desserts",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
        description: "Rich brownie, ice cream, and caramel sauce"
    },

    // Drinks
    {
        id: 13,
        name: "Iced Cola",
        category: "drinks",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1554866585-5670fdf1f5e5?w=400&h=400&fit=crop",
        description: "Classic carbonated cola served ice cold"
    },
    {
        id: 14,
        name: "Strawberry Smoothie",
        category: "drinks",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop",
        description: "Fresh strawberries blended with yogurt and milk"
    },
    {
        id: 15,
        name: "Energy Drink Blast",
        category: "drinks",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1570098189028-65dd2e62f5b7?w=400&h=400&fit=crop",
        description: "Energizing citrus flavor with a kick"
    }
];

// Shopping Cart
let cart = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';

// Initialize the website
function init() {
    renderFoodItems();
    setupFilters();
    renderFavorites();
    updateCartCount();
}

// Render food items to the grid
function renderFoodItems() {
    const grid = document.getElementById('food-grid');
    grid.innerHTML = '';
    
    const filtered = currentFilter === 'all' 
        ? foods 
        : foods.filter(food => food.category === currentFilter);
    
    filtered.forEach(food => {
        const isFavorite = favorites.find(fav => fav.id === food.id);
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <div class="food-image">
                <img src="${food.image}" alt="${food.name}">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${food.id})">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-footer">
                    <span class="price>$${food.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${food.id})">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(foodCard);
    });
}

// Setup filter buttons
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderFoodItems();
        });
    });
}

// Add item to cart
function addToCart(foodId) {
    const food = foods.find(f => f.id === foodId);
    cart.push(food);
    updateCartCount();
    showNotification(`${food.name} added to cart!`);
}

// Toggle favorite
function toggleFavorite(foodId) {
    const food = foods.find(f => f.id === foodId);
    const index = favorites.findIndex(fav => fav.id === foodId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(food);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFoodItems();
    renderFavorites();
}

// Render favorites
function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No favorites yet! Click the heart on any item to add it.</p>';
        return;
    }
    
    favoritesList.innerHTML = '';
    favorites.forEach(food => {
        const favCard = document.createElement('div');
        favCard.className = 'favorite-card';
        favCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="favorite-info">
                <h4>${food.name}</h4>
                <p>$${food.price.toFixed(2)}</p>
                <button onclick="addToCart(${food.id})">Add to Cart</button>
            </div>
        `;
        favoritesList.appendChild(favCard);
    });
}

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
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
