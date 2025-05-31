
// Demo user accounts
const demoUsers = [
    {
        id: 1,
        name: "Priya Sharma",
        email: "priya.sharma@student.com",
        password: "demo123",
        role: "Engineering Student",
        avatar: "PS",
        department: "Computer Science"
    },
    {
        id: 2,
        name: "Rahul Kumar",
        email: "rahul.kumar@student.com",
        password: "demo123",
        role: "Medical Student",
        avatar: "RK",
        department: "MBBS"
    },
    {
        id: 3,
        name: "Ankit Singh",
        email: "ankit.singh@student.com",
        password: "demo123",
        role: "Engineering Student",
        avatar: "AS",
        department: "Mechanical"
    },
    {
        id: 4,
        name: "Sneha Patel",
        email: "sneha.patel@student.com",
        password: "demo123",
        role: "Commerce Student",
        avatar: "SP",
        department: "B.Com"
    },
    {
        id: 5,
        name: "Vikash Gupta",
        email: "vikash.gupta@student.com",
        password: "demo123",
        role: "Science Student",
        avatar: "VG",
        department: "Chemistry"
    },
    {
        id: 6,
        name: "Meera Joshi",
        email: "meera.joshi@student.com",
        password: "demo123",
        role: "Engineering Student",
        avatar: "MJ",
        department: "Electrical"
    },
    {
        id: 7,
        name: "Arjun Reddy",
        email: "arjun.reddy@student.com",
        password: "demo123",
        role: "Arts Student",
        avatar: "AR",
        department: "Literature"
    },
    {
        id: 8,
        name: "Kavya Nair",
        email: "kavya.nair@student.com",
        password: "demo123",
        role: "Medical Student",
        avatar: "KN",
        department: "Pharmacy"
    },
    {
        id: 9,
        name: "Rohit Verma",
        email: "rohit.verma@student.com",
        password: "demo123",
        role: "Engineering Student",
        avatar: "RV",
        department: "Civil"
    },
    {
        id: 10,
        name: "Pooja Agarwal",
        email: "pooja.agarwal@student.com",
        password: "demo123",
        role: "Commerce Student",
        avatar: "PA",
        department: "MBA"
    }
];

// Current user state
let currentUser = JSON.parse(localStorage.getItem('studyHubUser')) || null;
let currentProduct = null;
let wishlist = JSON.parse(localStorage.getItem('studyHubWishlist')) || [];

// Loading Screen Logic
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainWebsite = document.getElementById('mainWebsite');
        
        // Hide loading screen
        loadingScreen.classList.add('hidden');
        
        // Show main website
        setTimeout(function() {
            mainWebsite.classList.add('visible');
            // Initialize the app after loading screen disappears
            initializeApp();
        }, 500);
    }, 3000); // 3 seconds delay
});

// Sample data with enhanced product information
const studyMaterials = [
    {
        id: 1,
        title: "Module 1 solution differentiation equation Notes",
        subject: "Mathematics 2",
        year: "1st Year",
        price: 0.00,
        rating: 4.8,
        reviews: 124,
        seller: "Admin",
        type: "Notes",
        pages: 10,
        downloads: 230,
        uploadDate: "2025-01-10",
        description: "Comprehensive engineering mathematics notes covering calculus, linear algebra, differential equations, and complex analysis. Perfect for engineering students preparing for exams.",
        features: ["Step-by-step solutions", "Practice problems", "Formula sheets", "Previous year questions"],
        fileSize: "7.7 MB",
        format: "PDF",
        fileUrl: "https://www.dropbox.com/scl/fi/d9uz3ma2rif9p8h0p08sw/differential-equation.pdf?rlkey=5rgt0i3k15z7eepsc26wr1hqq&st=7yzefekb&dl=0",
        
    },
    {
        id: 2,
        title: "Module 2 solution Graph theory Notes",
        subject: "Mathematics 2",
        year: "1st Year",
        price: 0.00,
        rating: 4.9,
        reviews: 89,
        seller: "Admin",
        type: "Notes",
        pages: 11,
        downloads: 156,
        uploadDate: "2025-01-08",
        description: "Compete graph theory module solution  diagrams.",
        features: ["diagrams", " tables", " experiments", "VHDL code examples"],
        fileSize: "6.3 MB",
        format: "PDF",
        fileUrl: "https://www.dropbox.com/scl/fi/jndfwim2mewf5efipa3pg/module-2-graph.pdf?rlkey=bmmhsrn0nhhm3c8e0k6bp6vdb&st=8o1g1sz3&dl=0",
    },
    {
        id: 3,
        title: "Module 3 Laplace Theorem solution Notes PDF",
        subject: "Mathematics  2",
        year: "1st year",
        price: 0.00,
        rating: 4.7,
        reviews: 67,
        seller: "Admin",
        type: "Notes",
        pages: 16,
        downloads: 189,
        uploadDate: "2025-01-05",
        description: "Detailed laplace theorem notes covering law , laplace therom solve question  engineering students.",
        features: ["theory", "Cycle analysis", "Property tables", "Solved examples"],
        fileSize: "8.2 MB",
        format: "PDF",
        fileUrl: "https://www.dropbox.com/scl/fi/nc48soerlo2zvdrugqopn/module-2-Laplace.pdf?rlkey=pac55bdymeaypgvkxgifg08vh&st=5mhqs85m&dl=0",
    },
    {
        id: 4,
        title: "Data Structures & Algorithms",
        subject: "Computer Science",
        year: "2nd Year",
        price: 0.00,
        rating: 4.9,
        reviews: 203,
        seller: "Sneha Patel",
        type: "Book",
        pages: 180,
        downloads: 445,
        uploadDate: "2025-01-12",
        description: "Comprehensive guide to data structures and algorithms with implementation in C++ and Java. Covers arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
        features: ["Code implementations", "Time complexity analysis", "Practice problems", "Interview questions"],
        fileSize: "35.7 MB",
        format: "PDF"
    },
    {
        id: 5,
        title: "Organic Chemistry Notes",
        subject: "Chemistry",
        year: "1st Year",
        price: 90,
        rating: 4.6,
        reviews: 78,
        seller: "Vikash Gupta",
        type: "Notes",
        pages: 52,
        downloads: 167,
        uploadDate: "2025-01-03",
        description: "Complete organic chemistry notes covering nomenclature, reaction mechanisms, stereochemistry, and functional groups. Perfect for chemistry students.",
        features: ["Reaction mechanisms", "Molecular structures", "Practice reactions", "Memory tricks"],
        fileSize: "18.3 MB",
        format: "PDF"
    },
    {
        id: 6,
        title: "Circuit Analysis Handbook",
        subject: "Electrical",
        year: "3rd Year",
        price: 180,
        rating: 4.8,
        reviews: 134,
        seller: "Meera Joshi",
        type: "Book",
        pages: 95,
        downloads: 298,
        uploadDate: "2025-01-07",
        description: "Comprehensive circuit analysis handbook covering DC and AC circuits, network theorems, and transient analysis. Includes SPICE simulations.",
        features: ["Circuit simulations", "Network theorems", "Phasor analysis", "MATLAB codes"],
        fileSize: "22.1 MB",
        format: "PDF"
    },
];

// Sample listings data
const myListings = [
    {
        id: 1,
        title: "Advanced Calculus Notes",
        subject: "Mathematics",
        price: 120,
        status: "active",
        views: 45,
        downloads: 12
    },
    {
        id: 2,
        title: "Physics Lab Manual",
        subject: "Physics",
        price: 80,
        status: "pending",
        views: 23,
        downloads: 5
    },
    {
        id: 3,
        title: "Programming in C++",
        subject: "Computer Science",
        price: 200,
        status: "active",
        views: 78,
        downloads: 34
    }
];

// Sample orders data
const myOrders = [
    {
        id: "ORD001",
        date: "2025-01-15",
        items: ["Engineering Mathematics Notes", "Digital Electronics Guide"],
        total: 250,
        status: "completed"

    },
    {
        id: "ORD002",
        date: "2025-01-10",
        items: ["Thermodynamics Notes PDF"],
        total: 75,
        status: "completed"
    },
    {
        id: "ORD003",
        date: "2025-01-08",
        items: ["Data Structures & Algorithms"],
        total: 200,
        status: "processing"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('studyHubCart')) || [];

// Authentication functions
function login(email, password) {
    const user = demoUsers.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('studyHubUser', JSON.stringify(user));
        updateUIForLoggedInUser();
        showNotification(`Welcome back, ${user.name}!`, 'success');
        showPage('home');
        return true;
    }
    return false;
}

function loginWithDemoAccount(userId) {
    const user = demoUsers.find(u => u.id === userId);
    if (user) {
        currentUser = user;
        localStorage.setItem('studyHubUser', JSON.stringify(user));
        updateUIForLoggedInUser();
        showNotification(`Logged in as ${user.name}!`, 'success');
        showPage('home');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('studyHubUser');
    updateUIForLoggedOutUser();
    showNotification('Logged out successfully!', 'success');
    showPage('home');
}

function updateUIForLoggedInUser() {
    if (currentUser) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('userInfo').style.display = 'flex';
        document.getElementById('userInitials').textContent = currentUser.avatar;
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
    }
}

function updateUIForLoggedOutUser() {
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('userInfo').style.display = 'none';
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const userAvatar = document.getElementById('userAvatar');
    const dropdown = document.getElementById('userDropdown');
    
    if (!userAvatar.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

function renderDemoAccounts() {
    const container = document.getElementById('demoAccountsList');
    let accountsHTML = '';

    demoUsers.forEach(user => {
        accountsHTML += `
            <div class="demo-account" onclick="loginWithDemoAccount(${user.id})">
                <div class="demo-account-info">
                    <div class="demo-account-avatar">${user.avatar}</div>
                    <div class="demo-account-details">
                        <div class="demo-account-name">${user.name}</div>
                        <div class="demo-account-role">${user.role} - ${user.department}</div>
                    </div>
                </div>
                <button class="use-account-btn" onclick="event.stopPropagation(); loginWithDemoAccount(${user.id})">
                    Use Account
                </button>
            </div>
        `;
    });

    container.innerHTML = accountsHTML;
}

// Product detail functions
function showProductDetail(productId) {
    const product = studyMaterials.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    renderProductDetail(product);
    showPage('product-detail');
}

function renderProductDetail(product) {
    // Update product title
    document.getElementById('productTitle').textContent = product.title;
    
    // Update product image icon based on type
    const productImage = document.getElementById('productImage');
    productImage.innerHTML = `<i class="fas fa-${product.type === 'Book' ? 'book' : 'file-pdf'}"></i>`;
    
    // Update badges
    const badgesContainer = document.getElementById('productBadges');
    badgesContainer.innerHTML = `
        <span class="badge badge-subject">${product.subject}</span>
        <span class="badge badge-year">${product.year}</span>
        <span class="badge badge-type">${product.type}</span>
    `;
    
    // Update price
    document.getElementById('productPrice').textContent = `₹${product.price}`;
    
    // Update rating
    const ratingContainer = document.getElementById('productRating');
    ratingContainer.innerHTML = `
        <div class="stars">${generateStars(product.rating)}</div>
        <span style="font-size: 1.2rem; font-weight: 600;">${product.rating}</span>
        <span style="color: #718096;">(${product.reviews} reviews)</span>
    `;
    
    // Update meta information
    const metaContainer = document.getElementById('productMeta');
    metaContainer.innerHTML = `
        <div class="meta-card">
            <div class="meta-card-value">${product.pages}</div>
            <div class="meta-card-label">Pages</div>
        </div>
        <div class="meta-card">
            <div class="meta-card-value">${product.downloads}</div>
            <div class="meta-card-label">Downloads</div>
        </div>
        <div class="meta-card">
            <div class="meta-card-value">${product.fileSize}</div>
            <div class="meta-card-label">File Size</div>
        </div>
        <div class="meta-card">
            <div class="meta-card-value">${product.format}</div>
            <div class="meta-card-label">Format</div>
        </div>
    `;
    
    // Update description
    document.getElementById('productDescription').textContent = product.description;
    
    // Update seller information
    const seller = demoUsers.find(u => u.name === product.seller);
    if (seller) {
        document.getElementById('sellerName').textContent = seller.name;
        document.getElementById('sellerDepartment').textContent = seller.department;
        document.getElementById('sellerAvatar').textContent = seller.avatar;
    }
    
    // Update wishlist button state
    updateWishlistButton(product.id);
}

function addToCartFromDetail() {
    if (!currentProduct) return;
    addToCart(currentProduct.id);
}

function toggleWishlist() {
    if (!currentUser) {
        showNotification('Please login to add items to wishlist!', 'info');
        showPage('login');
        return;
    }

    if (!currentProduct) return;

    const productId = currentProduct.id;
    const isInWishlist = wishlist.includes(productId);

    if (isInWishlist) {
        wishlist = wishlist.filter(id => id !== productId);
        showNotification('Removed from wishlist!', 'success');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist!', 'success');
    }

    localStorage.setItem('studyHubWishlist', JSON.stringify(wishlist));
    updateWishlistButton(productId);
}

function updateWishlistButton(productId) {
    const wishlistBtn = document.getElementById('wishlistBtn');
    const isInWishlist = wishlist.includes(productId);
    
    if (isInWishlist) {
        wishlistBtn.classList.add('active');
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
    } else {
        wishlistBtn.classList.remove('active');
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
    }
}

function buyNow() {
    if (!currentUser) {
        showNotification('Please login to purchase!', 'info');
        showPage('login');
        return;
    }

    if (!currentProduct) return;

    showNotification('Redirecting to payment gateway...', 'info');
    setTimeout(() => {
        showNotification('Payment successful! Download link sent to your email.', 'success');
        
        // Add to orders
        const newOrder = {
            id: `ORD${String(myOrders.length + 1).padStart(3, '0')}`,
            date: new Date().toISOString().split('T')[0],
            items: [currentProduct.title],
            total: currentProduct.price,
            status: 'completed'
            
        };
        myOrders.unshift(newOrder);
        
        setTimeout(() => {
            showPage('orders');
        }, 1000);
    }, 2000);
}



function downloadSample() {
    if (!currentProduct || !currentProduct.fileUrl) {
        showNotification('No file available to download for this product.', 'error');
        return;
    }

    showNotification('Downloading sample file...', 'info');

    // Trigger download in new tab
    const a = document.createElement('a');
    a.href = currentProduct.fileUrl;
    a.download = ''; // optional: add file name here
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
        showNotification('Sample downloaded successfully!', 'success');
    }, 1500);
}

function openFullPreview() {
    if (!currentProduct) return;
    
    showNotification('Opening preview in new window...', 'info');
    // In a real application, this would open a preview modal or new window
    setTimeout(() => {
        showNotification('Preview feature coming soon!', 'info');
    }, 1000);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function addToCart(itemId) {
    if (!currentUser) {
        showNotification('Please login to add items to cart!', 'info');
        showPage('login');
        return;
    }

    const item = studyMaterials.find(material => material.id === itemId);
    if (item && !cart.find(cartItem => cartItem.id === itemId)) {
        cart.push(item);
        localStorage.setItem('studyHubCart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${item.title} added to cart!`, 'success');
    } else if (cart.find(cartItem => cartItem.id === itemId)) {
        showNotification('Item already in cart!', 'info');
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('studyHubCart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    showNotification('Item removed from cart!', 'success');
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Page navigation
function showPage(pageId) {
    // Check if user needs to be logged in for certain pages
    const protectedPages = ['listings', 'orders', 'cart'];
    if (protectedPages.includes(pageId) && !currentUser) {
        showNotification('Please login to access this page!', 'info');
        showPage('login');
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Add active class to corresponding nav link
    const navLinks = document.querySelectorAll('.nav-link');
    const pageIndex = ['home', 'listings', 'orders', 'contact'].indexOf(pageId);
    if (pageIndex !== -1 && navLinks[pageIndex]) {
        navLinks[pageIndex].classList.add('active');
    }

    // Load page content
    switch(pageId) {
        case 'home':
            renderStudyMaterials();
            break;
        case 'cart':
            renderCartItems();
            break;
        case 'listings':
            renderMyListings();
            break;
        case 'orders':
            renderMyOrders();
            break;
        case 'login':
            renderDemoAccounts();
            break;
    }
}

// Render functions
function renderStudyMaterials() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    studyMaterials.forEach((material, index) => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => showProductDetail(material.id);
        
        card.innerHTML = `
            <div class="card-header">
                <div class="subject-badge">${material.subject}</div>
                <div class="card-title">${material.title}</div>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${material.year}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-${material.type === 'Book' ? 'book' : 'file-pdf'}"></i>
                        <span>${material.type}</span>
                    </div>
                </div>
                <div class="rating">
                    <div class="stars">
                        ${generateStars(material.rating)}
                    </div>
                    <span>(${material.rating})</span>
                </div>
                <div class="price">₹${material.price}</div>
                <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${material.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some study materials to get started!</p>
                <button class="buy-btn" onclick="showPage('home')" style="max-width: 200px; margin-top: 1rem;">
                    Continue Shopping
                </button>
            </div>
        `;
        return;
    }

    let cartHTML = '';
    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-meta">${item.subject} • ${item.year} • ${item.type}</div>
                </div>
                <div class="cart-item-price">₹${item.price}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
    });

    cartHTML += `
        <div class="cart-summary">
            <div class="total-price">Total: ₹${calculateTotal()}</div>
            <button class="checkout-btn" onclick="proceedToCheckout()">
                <i class="fas fa-credit-card"></i> Proceed to Checkout
            </button>
        </div>
    `;

    container.innerHTML = cartHTML;
}

function renderMyListings() {
    const container = document.getElementById('listingsContent');
    let listingsHTML = '';

    myListings.forEach(listing => {
        listingsHTML += `
            <div class="listing-item">
                <div>
                    <div class="card-title">${listing.title}</div>
                    <div class="card-meta">
                        <span>${listing.subject} • ₹${listing.price}</span>
                    </div>
                    <div style="margin-top: 0.5rem;">
                        <small>Views: ${listing.views} • Downloads: ${listing.downloads}</small>
                    </div>
                </div>
                <div>
                    <span class="listing-status ${listing.status === 'active' ? 'status-active' : 'status-pending'}">
                        ${listing.status.toUpperCase()}
                    </span>
                </div>
            </div>
        `;
    });

    container.innerHTML = listingsHTML;
}

function renderMyOrders() {
    const container = document.getElementById('ordersContent');
    let ordersHTML = '';

    myOrders.forEach(order => {
        ordersHTML += `
            <div class="order-item">
                <div class="order-header">
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div>
                    <strong>Items:</strong> ${order.items.join(', ')}
                </div>
                <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>Total: ₹${order.total}</strong></span>
                    <span class="listing-status ${order.status === 'completed' ? 'status-active' : 'status-pending'}">
                        ${order.status.toUpperCase()}
                    </span>
                </div>
            </div>
        `;
    });

    container.innerHTML = ordersHTML;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

function proceedToCheckout() {
    showNotification('Redirecting to payment gateway...', 'info');
    setTimeout(() => {
        showNotification('Payment successful! Check your orders.', 'success');
        // Add items to orders
        const newOrder = {
            id: `ORD${String(myOrders.length + 1).padStart(3, '0')}`,
            date: new Date().toISOString().split('T')[0],
            items: cart.map(item => item.title),
            total: calculateTotal(),
            status: 'processing'
        };
        myOrders.unshift(newOrder);
        
        // Clear cart
        cart = [];
        localStorage.setItem('studyHubCart', JSON.stringify(cart));
        updateCartCount();
        
        // Show orders page
        setTimeout(() => {
            showPage('orders');
        }, 1000);
    }, 2000);
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const subject = card.querySelector('.subject-badge').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || subject.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Form submissions
function setupForms() {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!', 'success');
        e.target.reset();
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (login(email, password)) {
            document.getElementById('loginForm').reset();
        } else {
            showNotification('Invalid email or password!', 'info');
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #48bb78, #38a169)' : 'linear-gradient(135deg, #667eea, #764ba2)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function toggleFilters() {
    showNotification('Filter options coming soon!', 'info');
}

// Initialize app
function initializeApp() {
    // Check if user is already logged in
    if (currentUser) {
        updateUIForLoggedInUser();
    } else {
        updateUIForLoggedOutUser();
    }
    
    updateCartCount();
    renderStudyMaterials();
    setupSearch();
    setupForms();
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobile-menu').addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});
