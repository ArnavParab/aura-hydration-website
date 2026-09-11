/**
 * AURA BOTTLES — REAL EXPRESS BACKEND SERVER
 * Handles REST APIs, Order Processing, Data Persistence, Newsletter, and Admin Explorer.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data persistence folder and files exist
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');

if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
}

if (!fs.existsSync(NEWSLETTER_FILE)) {
  fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify([], null, 2));
}

// Helper: Read JSON file safely
function readJson(file) {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
    return [];
  }
}

// Helper: Write JSON file safely
function writeJson(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
    return false;
  }
}

// Products Catalog Database
const PRODUCTS = [
  {
    id: "aura-daily-750",
    name: "The Daily Hydrator",
    category: "insulated",
    categoryLabel: "Vacuum Insulated",
    capacity: "750ml / 25oz",
    price: 42.0,
    rating: 4.9,
    reviewsCount: 1840,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    stock: 142
  },
  {
    id: "aura-explorer-1200",
    name: "The Explorer Flask",
    category: "insulated",
    categoryLabel: "Vacuum Insulated",
    capacity: "1200ml / 40oz",
    price: 54.0,
    rating: 4.95,
    reviewsCount: 920,
    badge: "EXPEDITION GRADE",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    stock: 89
  },
  {
    id: "aura-uvpure-600",
    name: "The UV-Pure Smart Bottle",
    category: "smart",
    categoryLabel: "Smart Tech",
    capacity: "600ml / 20oz",
    price: 78.0,
    rating: 4.88,
    reviewsCount: 650,
    badge: "SELF-CLEANING",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    stock: 64
  },
  {
    id: "aura-aero-tumbler",
    name: "The Aero Commuter Tumbler",
    category: "tumblers",
    categoryLabel: "Tumblers & Travel",
    capacity: "900ml / 30oz",
    price: 48.0,
    rating: 4.92,
    reviewsCount: 1420,
    badge: "CUPHOLDER READY",
    image: "https://images.unsplash.com/photo-1570572886018-00448b75f10b?auto=format&fit=crop&w=800&q=80",
    stock: 110
  },
  {
    id: "aura-summit-jug",
    name: "The Summit Oasis Jug",
    category: "insulated",
    categoryLabel: "Vacuum Insulated",
    capacity: "1800ml / 64oz",
    price: 68.0,
    rating: 4.94,
    reviewsCount: 310,
    badge: "HIGH CAPACITY",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    stock: 45
  },
  {
    id: "aura-magloop-cap",
    name: "MagLoop Straw Sports Lid",
    category: "accessories",
    categoryLabel: "Lids & Accessories",
    capacity: "Universal Fit",
    price: 14.0,
    rating: 4.85,
    reviewsCount: 520,
    badge: "ACCESSORY",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80",
    stock: 250
  },
  {
    id: "aura-uv-cap-standalone",
    name: "UV-C Smart Sanitizer Cap",
    category: "smart",
    categoryLabel: "Smart Tech",
    capacity: "Universal Fit",
    price: 35.0,
    rating: 4.89,
    reviewsCount: 410,
    badge: "SMART ADD-ON",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    stock: 115
  },
  {
    id: "aura-infuser-basket",
    name: "Stainless Fruit & Tea Infuser",
    category: "accessories",
    categoryLabel: "Lids & Accessories",
    capacity: "Universal Fit",
    price: 12.0,
    rating: 4.79,
    reviewsCount: 290,
    badge: "ACCESSORY",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    stock: 180
  }
];

// Valid Promotional Coupons
const COUPONS = {
  "AURA15": { discountPercent: 15, description: "15% off first order" },
  "HYDRO20": { discountPercent: 20, description: "20% VIP loyalty discount" },
  "FREESHIP": { discountPercent: 0, freeShipping: true, description: "Free shipping perk" }
};

// ==========================================================================
// API ROUTES
// ==========================================================================

// 1. Health & Status
app.get('/api/health', (req, res) => {
  const orders = readJson(ORDERS_FILE);
  const subscribers = readJson(NEWSLETTER_FILE);

  res.json({
    status: "ok",
    service: "AURA Hydration API",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    metrics: {
      totalProducts: PRODUCTS.length,
      totalOrders: orders.length,
      totalSubscribers: subscribers.length
    }
  });
});

// 2. Get All Products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'all') {
    return res.json(PRODUCTS.filter(p => p.category === category));
  }
  res.json(PRODUCTS);
});

// 3. Get Single Product
app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

// 4. Validate Coupon Code
app.post('/api/coupon/validate', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ valid: false, message: "No code provided" });
  }

  const cleanCode = code.trim().toUpperCase();
  const coupon = COUPONS[cleanCode];

  if (coupon) {
    return res.json({
      valid: true,
      code: cleanCode,
      discountPercent: coupon.discountPercent,
      description: coupon.description
    });
  }

  res.status(400).json({ valid: false, message: "Invalid promotional code" });
});

// 5. Checkout / Place Order
app.post('/api/checkout', (req, res) => {
  const { items, discountCode, customerInfo } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart cannot be empty" });
  }

  // Calculate authoritative subtotal
  const subtotal = items.reduce((sum, item) => {
    const qty = parseInt(item.quantity, 10) || 1;
    const price = parseFloat(item.price) || 0;
    return sum + (price * qty);
  }, 0);

  // Apply server-side discount
  let discountAmount = 0;
  if (discountCode && COUPONS[discountCode.toUpperCase()]) {
    const coupon = COUPONS[discountCode.toUpperCase()];
    discountAmount = (subtotal * coupon.discountPercent) / 100;
  }

  // Free shipping threshold ($50)
  const shippingCost = (subtotal - discountAmount >= 50 || subtotal === 0) ? 0.00 : 6.99;
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingCost);

  // Generate unique order reference
  const orderId = `AURA-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

  const newOrder = {
    id: orderId,
    timestamp: new Date().toISOString(),
    status: "CONFIRMED",
    paymentStatus: "PAID_SIMULATED",
    items: items.map(i => ({
      id: i.id,
      name: i.name,
      capacity: i.capacity || "Standard",
      color: i.color || "Standard",
      cap: i.cap || "Standard",
      engraving: i.engraving || null,
      unitPrice: i.price,
      quantity: i.quantity,
      total: i.price * i.quantity
    })),
    pricing: {
      subtotal: parseFloat(subtotal.toFixed(2)),
      discountCode: discountCode || null,
      discountAmount: parseFloat(discountAmount.toFixed(2)),
      shipping: parseFloat(shippingCost.toFixed(2)),
      total: parseFloat(totalAmount.toFixed(2))
    },
    customer: customerInfo || {
      name: "Valued Adventurer",
      email: "guest@aurabottles.com",
      shippingMethod: shippingCost === 0 ? "Complimentary Express" : "Standard Ground"
    }
  };

  // Save to database
  const orders = readJson(ORDERS_FILE);
  orders.unshift(newOrder); // newest first
  writeJson(ORDERS_FILE, orders);

  console.log(`[Order Placed] Order #${newOrder.id} - Total: $${newOrder.pricing.total}`);

  res.status(201).json({
    success: true,
    message: "Order placed successfully!",
    order: newOrder
  });
});

// 6. Get All Orders (Admin / Backend check)
app.get('/api/orders', (req, res) => {
  const orders = readJson(ORDERS_FILE);
  res.json({
    count: orders.length,
    orders: orders
  });
});

// 7. Get Single Order by ID
app.get('/api/orders/:id', (req, res) => {
  const orders = readJson(ORDERS_FILE);
  const order = orders.find(o => o.id.toLowerCase() === req.params.id.toLowerCase());

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json(order);
});

// 8. Newsletter Subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const cleanEmail = email.trim().toLowerCase();
  const subscribers = readJson(NEWSLETTER_FILE);

  const existing = subscribers.find(s => s.email === cleanEmail);
  if (existing) {
    return res.json({
      success: true,
      message: "You are already subscribed!",
      code: "AURA15"
    });
  }

  const newSub = {
    email: cleanEmail,
    subscribedAt: new Date().toISOString(),
    source: "website_footer"
  };

  subscribers.unshift(newSub);
  writeJson(NEWSLETTER_FILE, subscribers);

  console.log(`[Newsletter] New subscriber: ${cleanEmail}`);

  res.status(201).json({
    success: true,
    message: "Successfully joined the AURA community!",
    code: "AURA15"
  });
});

// 9. Server Overview & Analytics
app.get('/api/stats', (req, res) => {
  const orders = readJson(ORDERS_FILE);
  const subscribers = readJson(NEWSLETTER_FILE);

  const totalRevenue = orders.reduce((sum, o) => sum + (o.pricing?.total || 0), 0);
  const totalBottlesSold = orders.reduce((sum, o) => {
    return sum + (o.items ? o.items.reduce((s, i) => s + (i.quantity || 1), 0) : 0);
  }, 0);

  res.json({
    totalRevenue: parseFloat(totalRevenue.toFixed(2)),
    totalOrders: orders.length,
    totalBottlesSold,
    subscribersCount: subscribers.length,
    recentOrders: orders.slice(0, 5)
  });
});

// ==========================================================================
// STATIC FRONTEND & ADMIN DASHBOARD SERVING
// ==========================================================================

// Serve static files from workspace
// STATIC FRONTEND & ADMIN DASHBOARD SERVING

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve admin dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Fallback: serve index.html for any unmatched routes (SPA fallback)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve Admin Dashboard page at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Fallback to index.html for main web visits
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 AURA Bottles Server is LIVE!`);
  console.log(`🌐 Website URL:  http://localhost:${PORT}`);
  console.log(`🛠️  Admin Panel:  http://localhost:${PORT}/admin`);
  console.log(`📊 API Health:   http://localhost:${PORT}/api/health`);
  console.log(`📦 API Orders:   http://localhost:${PORT}/api/orders`);
  console.log(`======================================================\n`);
});
