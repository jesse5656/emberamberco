// Ember & Amber Co. - Product Data
const products = [
    {
        id: "sports-mom-tee",
        name: "Sports Mom Game Day Vibes Tee",
        category: "apparel",
        price: 28.00,
        salePrice: 14.11,
        discount: "50% off",
        badge: "Best Seller",
        image: "images/products/sports-mom-tee.jpg",
        description: "Perfect for all the moms who spend their weekends at the ball field.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Heather Gray", "Navy"],
        inStock: true,
        featured: true
    },
    {
        id: "blessed-mama-shirt",
        name: "Blessed Mama Shirt",
        category: "apparel",
        price: 32.00,
        salePrice: 18.00,
        discount: "44% off",
        badge: "Popular",
        image: "images/products/blessed-mama.jpg",
        description: "Celebrate motherhood with this beautiful Blessed Mama design.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Cream", "Dusty Rose"],
        inStock: true,
        featured: true
    },
    {
        id: "in-my-mom-era-tee",
        name: "In My Mom Era T-shirt",
        category: "apparel",
        price: 30.00,
        salePrice: 21.74,
        discount: "28% off",
        badge: null,
        image: "images/products/mom-era-tee.jpg",
        description: "Living my best life in my mom era! Trendy and comfortable.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Black", "Sage"],
        inStock: true,
        featured: true
    },
    {
        id: "pumpkin-vanilla-candle",
        name: "Pumpkin Vanilla Hand-Poured Candle",
        category: "candles",
        price: 24.00,
        salePrice: null,
        discount: null,
        badge: "Fall Favorite",
        image: "images/products/pumpkin-candle.jpg",
        description: "8oz hand-poured soy candle with warm pumpkin and vanilla notes.",
        sizes: ["8oz", "16oz"],
        colors: null,
        inStock: true,
        featured: true
    },
    {
        id: "game-day-mama-shirt",
        name: "Game Day Mama Shirt",
        category: "apparel",
        price: 30.00,
        salePrice: 19.66,
        discount: "35% off",
        badge: null,
        image: "images/products/game-day-mama.jpg",
        description: "Show your game day spirit with this fun and comfortable tee.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Gray", "Black"],
        inStock: true,
        featured: false
    },
    {
        id: "favorite-player-mom",
        name: "Favorite Player Calls Me Mom Shirt",
        category: "apparel",
        price: 32.00,
        salePrice: 18.00,
        discount: "44% off",
        badge: "New",
        image: "images/products/favorite-player.jpg",
        description: "Because being your athlete's biggest fan comes with the best title—Mom!",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Cream"],
        inStock: true,
        featured: true
    },
    {
        id: "cozy-fall-candle",
        name: "Cozy Fall Nights Candle",
        category: "candles",
        price: 24.00,
        salePrice: null,
        discount: null,
        badge: null,
        image: "images/products/cozy-fall-candle.jpg",
        description: "Warm amber, cinnamon, and woodsy notes for the perfect autumn atmosphere.",
        sizes: ["8oz", "16oz"],
        colors: null,
        inStock: true,
        featured: false
    },
    {
        id: "mom-life-tee",
        name: "Mom Life Best Life Tee",
        category: "apparel",
        price: 28.00,
        salePrice: null,
        discount: null,
        badge: null,
        image: "images/products/mom-life-tee.jpg",
        description: "Embrace the beautiful chaos of mom life with this comfortable tee.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["White", "Heather Gray", "Blush"],
        inStock: true,
        featured: false
    },
    {
        id: "coffee-campfire-chaos-mug",
        name: "Coffee, Campfires & Chaos Mug",
        category: "home",
        price: 18.00,
        salePrice: null,
        discount: null,
        badge: null,
        image: "images/products/campfire-mug.jpg",
        description: "15oz ceramic mug perfect for your morning coffee and chaotic adventures.",
        sizes: ["15oz"],
        colors: ["Black", "White"],
        inStock: true,
        featured: false
    },
    {
        id: "mom-gift-set",
        name: "Ultimate Mom Gift Set",
        category: "gifts",
        price: 65.00,
        salePrice: 55.00,
        discount: "15% off",
        badge: "Gift Set",
        image: "images/products/mom-gift-set.jpg",
        description: "The perfect gift for any mom! Includes a tee, candle, and mug.",
        sizes: ["One Size"],
        colors: null,
        inStock: true,
        featured: true
    },
    {
        id: "raising-legends-sweatshirt",
        name: "Raising Legends Sweatshirt",
        category: "apparel",
        price: 48.00,
        salePrice: null,
        discount: null,
        badge: "Best Seller",
        image: "images/products/raising-legends.jpg",
        description: "Soft, cozy sweatshirt celebrating the amazing work of raising legends.",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: ["Cream", "Heather Gray", "Dusty Rose"],
        inStock: true,
        featured: true
    },
    {
        id: "mama-made-hat",
        name: "Mama Made Embroidered Hat",
        category: "apparel",
        price: 26.00,
        salePrice: null,
        discount: null,
        badge: null,
        image: "images/products/mama-hat.jpg",
        description: "Classic embroidered hat with 'Mama Made' design. Adjustable fit.",
        sizes: ["One Size"],
        colors: ["Natural", "Black", "Navy"],
        inStock: true,
        featured: false
    }
];

// Render products to the DOM
function renderProducts(filter = 'all') {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    const filteredProducts = filter === 'all' 
        ? products.filter(p => p.featured)
        : products.filter(p => p.category === filter);
    
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn" onclick="addToCart('${product.id}')" aria-label="Add to cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="product-action-btn" onclick="quickView('${product.id}')" aria-label="Quick view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">$${(product.salePrice || product.price).toFixed(2)}</span>
                    ${product.salePrice ? `<span class="price-original">$${product.price.toFixed(2)}</span>` : ''}
                    ${product.discount ? `<span class="price-discount">${product.discount}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
    renderProducts();
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (window.Snipcart) {
        Snipcart.api.cart.items.add({
            name: product.name,
            price: product.salePrice || product.price,
            id: product.id,
            url: window.location.href + '?product=' + product.id,
            image: product.image
        });
    } else {
        alert('Added ' + product.name + ' to cart! (Connect Snipcart to process checkout)');
    }
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) console.log('Quick view:', product);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, renderProducts, addToCart };
}
