# 💧 AURA Bottles — Premium Hydration Showcase & Full-Stack Platform

A sleek, modern, high-converting e-commerce advertising website and full-stack platform built for **AURA**, an innovative premium insulated & smart water bottle brand.

---

## ⚡ Full-Stack Architecture

This project includes a **real Node.js / Express backend** with persistent file-based JSON storage, REST APIs, and an interactive Admin Dashboard.

```
my first time/
├── server.js        # Real Express.js backend server (REST APIs, static server)
├── admin.html       # Visual Admin Control Dashboard & Live Order Explorer
├── index.html       # Frontend store, customizer SVG, and shopping cart
├── style.css        # Modern design system & responsive layout
├── script.js        # Client-side engine linked to backend REST APIs
├── package.json     # Node.js dependencies (express, cors)
└── data/
    ├── orders.json      # Persistent customer orders database
    └── newsletter.json  # Persistent newsletter VIP subscribers database
```

---

## 🚀 How to Run the Real Backend Server

In PowerShell or Command Prompt, run:

```bash
npm start
```

Or:

```bash
node server.js
```

The server will boot up at **`http://localhost:5000`**.

---

## 🌐 Live URLs & Endpoints

| URL | Description |
|---|---|
| **`http://localhost:5000`** | Main AURA Bottle Showcase & Store |
| **`http://localhost:5000/admin`** | Visual Admin Panel & Order Explorer |
| **`http://localhost:5000/api/health`** | Server health, uptime, and database counts |
| **`http://localhost:5000/api/products`** | Complete products catalog JSON |
| **`http://localhost:5000/api/orders`** | List of all persisted customer orders |
| **`http://localhost:5000/api/stats`** | Real-time revenue, order count, and subscriber analytics |
| **`POST /api/checkout`** | Place an order and save to `data/orders.json` |
| **`POST /api/coupon/validate`** | Server-side coupon verification (`AURA15`) |
| **`POST /api/newsletter`** | Save subscriber email to `data/newsletter.json` |

---

## 🛠️ How to "Check the Backend"

### Method 1: The Visual Admin Panel (Easiest)
Open **`http://localhost:5000/admin`** in your browser. You will see:
- Live Total Revenue, Total Orders Placed, and Bottles Sold metrics.
- A table of every placed order with bottle specifications, custom engravings, and customer details.
- A "+ Place Test Order" button to watch the database update in real-time.

### Method 2: Inspect the Real JSON Database
All orders and subscribers are saved on your disk:
- **`data/orders.json`**: Open this file to see real saved order records.
- **`data/newsletter.json`**: Open this file to view subscriber emails.

### Method 3: Test via Terminal (cURL / PowerShell)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/health"
Invoke-RestMethod -Uri "http://localhost:5000/api/orders"
```
