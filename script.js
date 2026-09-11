/**
 * AURA HYDRATION TECHNOLOGIES — MAIN SCRIPT
 * Interactive Customizer Studio, Thermal Simulator, Eco Calculator,
 * Product Catalog, Quick View Modal, and E-commerce Cart System.
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATA
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: "aura-daily-750",
    name: "The Daily Hydrator",
    category: "insulated",
    categoryLabel: "Vacuum Insulated",
    capacity: "750ml / 25oz",
    price: 42.0,
    rating: 4.9,
    reviewsCount: 1840,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    badge: "BESTSELLER",
    colors: ["#14171d", "#e4e8ec", "#364e3c", "#bd6d4c", "#1d5bc7"],
    description: "Our flagship everyday vessel. Triple-wall TempShield™ insulation keeps ice-cold for 36 hours. Equipped with our ergonomic MagLoop straw lid and PureTaste™ ceramic interior.",
    specs: [
      "Capacity: 750 ml (25.4 oz)",
      "Height: 260 mm | Diameter: 76 mm (Cup-holder friendly)",
      "Insulation: 36h Chilled / 18h Steaming Hot",
      "Interior: Non-reactive PureTaste™ Ceramic Lining",
      "Material: Recycled 18/8 Pro-Grade Stainless Steel"
    ]
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
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    badge: "EXPEDITION GRADE",
    colors: ["#14171d", "#364e3c", "#bd6d4c", "#76b82a"],
    description: "Built for all-day trail expeditions, backcountry hikes, and long training sessions. High-capacity vacuum volume with reinforced silicone bumper and dual-mode carry handle.",
    specs: [
      "Capacity: 1200 ml (40.5 oz)",
      "Height: 295 mm | Diameter: 92 mm",
      "Insulation: 40h Ice Cold / 24h Hot",
      "Heavy-duty impact silicone base boot included",
      "100% leakproof high-flow twist spout"
    ]
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
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    badge: "SELF-CLEANING",
    colors: ["#14171d", "#e4e8ec", "#1d5bc7"],
    description: "Harnesses medical-grade 280nm UV-C LED in the cap to eradicate 99.999% of bacteria, viruses, and mold. Automatically cleans itself every 2 hours with magnetic rechargeable battery.",
    specs: [
      "Capacity: 600 ml (20.2 oz)",
      "Self-Cleaning: Deep UV-C sterilization every 120 mins",
      "Battery: 30 days per charge via waterproof magnetic dock",
      "PureTaste™ inert ceramic shield interior",
      "IPX7 fully submersible waterproof cap"
    ]
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
    image: "https://images.unsplash.com/photo-1570572886018-00448b75f10b?auto=format&fit=crop&w=800&q=80",
    badge: "CUPHOLDER READY",
    colors: ["#14171d", "#e4e8ec", "#bd6d4c", "#d48a97"],
    description: "Designed for seamless commuting and office hydration. Features an ergonomic comfort-grip handle, splash-proof dual-flow lid (straw or chug), and a slim tapered base.",
    specs: [
      "Capacity: 900 ml (30.4 oz)",
      "Universal car cup holder tapered contour",
      "2-in-1 Leak-resistant Flip Sip & Straw lid",
      "Sweat-free textured powder coat finish",
      "Dishwasher safe top rack"
    ]
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
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    badge: "HIGH CAPACITY",
    colors: ["#14171d", "#364e3c"],
    description: "Half-gallon fortress for team sports, basecamp, and remote remote work days. Keeps water arctic cold for two full days through blistering summer heat.",
    specs: [
      "Capacity: 1800 ml (60.8 oz / 0.5 Gal)",
      "Reinforced heavy-duty stainless steel carrying bail",
      "Extra wide mouth for easy ice block filling",
      "Double-walled vacuum condensation barrier"
    ]
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
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80",
    badge: "ACCESSORY",
    colors: ["#14171d"],
    description: "Upgrade or replace your lid. Features a magnetic cap lock, food-grade silicone drinking spout, and integrated finger haul loop.",
    specs: [
      "Fits all AURA wide-mouth vessels",
      "Includes 2 trimmable BPA-free straws",
      "100% leakproof when closed"
    ]
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
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    badge: "SMART ADD-ON",
    colors: ["#14171d", "#e4e8ec"],
    description: "Transform your existing Daily or Explorer into a self-cleaning smart bottle. Eradicates germs in 90 seconds. Magnetic charging cable included.",
    specs: [
      "High power 280nm UV-C LED emitter",
      "Automated self-purifying cycle every 2 hours",
      "USB magnetic charging cable included"
    ]
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
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    badge: "ACCESSORY",
    colors: ["#b8c0c8"],
    description: "Micro-perforated stainless steel infuser basket. Brew fresh fruit water, cold brews, or loose-leaf teas directly inside your AURA flask.",
    specs: [
      "Laser-etched micro mesh prevents tea leaves escape",
      "Food safe pro-grade 18/8 stainless steel",
      "Top-rack dishwasher safe"
    ]
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
const AppState = {
  // Customizer State
  customizer: {
    model: "daily",
    modelName: "The Daily",
    capacity: "750ml / 25oz",
    basePrice: 42,
    colorName: "Obsidian Black",
    colorHex: "#14171d",
    colorStops: ["#0f1115", "#20242e", "#323847", "#1b1f28", "#0a0c0e"],
    capType: "straw",
    capName: "Straw Sports Lid",
    capPrice: 0,
    engravingText: "YOUR NAME"
  },

  // Thermal Simulator State
  thermalHours: 0,

  // Eco Impact State
  dailyBottles: 2,

  // Shopping Cart State
  cart: [],
  discountCode: "",
  discountRate: 0.0, // e.g. 0.15 for 15%
  freeShippingThreshold: 50.0,
  shippingRate: 6.99
};

// ==========================================================================
// 3. INITIALIZATION & EVENT DISPATCH
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLocalStorage();
  initCustomizer();
  initProductCatalog();
  initThermalSimulator();
  initEcoCalculator();
  initCart();
  initModals();
  initGeneralInteractions();
});

// Load cart from LocalStorage
function initLocalStorage() {
  try {
    const savedCart = localStorage.getItem("aura_cart_data");
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }
  } catch (err) {
    console.error("Error loading cart storage", err);
    AppState.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("aura_cart_data", JSON.stringify(AppState.cart));
  } catch (err) {
    console.error("Error saving cart", err);
  }
}

// ==========================================================================
// 4. INTERACTIVE CUSTOMIZER STUDIO
// ==========================================================================
function initCustomizer() {
  const modelCards = document.querySelectorAll(".model-card");
  const colorSwatches = document.querySelectorAll(".color-swatch-item");
  const capCards = document.querySelectorAll(".cap-option-card");
  const engravingInput = document.getElementById("engravingInput");
  const clearEngravingBtn = document.getElementById("clearEngravingBtn");
  const addCustomBtn = document.getElementById("addCustomBottleToCart");

  // 1. Model Selection
  modelCards.forEach((card) => {
    card.addEventListener("click", () => {
      modelCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      AppState.customizer.model = card.dataset.model;
      AppState.customizer.modelName = card.querySelector(".model-name").textContent;
      AppState.customizer.capacity = card.dataset.capacity;
      AppState.customizer.basePrice = parseFloat(card.dataset.baseprice);

      updateCustomizerSvgShape(card.dataset.model);
      updateCustomizerPriceAndBadges();
    });
  });

  // 2. Color Finish Selection
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      colorSwatches.forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");

      AppState.customizer.colorName = swatch.dataset.name;
      AppState.customizer.colorHex = swatch.dataset.color;
      AppState.customizer.colorStops = [
        swatch.dataset.c1,
        swatch.dataset.c2,
        swatch.dataset.c3,
        swatch.dataset.c4,
        swatch.dataset.c5
      ];

      updateCustomizerSvgColor(AppState.customizer.colorStops);
      document.getElementById("selectedColorName").textContent = AppState.customizer.colorName;
      document.getElementById("stageColorBadge").textContent = AppState.customizer.colorName;
    });
  });

  // 3. Cap Selection
  capCards.forEach((capCard) => {
    capCard.addEventListener("click", () => {
      capCards.forEach((c) => c.classList.remove("active"));
      capCard.classList.add("active");

      AppState.customizer.capType = capCard.dataset.cap;
      AppState.customizer.capName = capCard.querySelector(".cap-title").textContent;
      AppState.customizer.capPrice = parseFloat(capCard.dataset.capprice);

      updateCustomizerSvgCap(capCard.dataset.cap);
      updateCustomizerPriceAndBadges();
    });
  });

  // 4. Real-time Laser Engraving Input
  if (engravingInput) {
    engravingInput.addEventListener("input", (e) => {
      const val = e.target.value.toUpperCase();
      AppState.customizer.engravingText = val;
      const svgText = document.getElementById("svgEngravingText");
      if (svgText) {
        svgText.textContent = val || "AURA";
      }
    });
  }

  if (clearEngravingBtn && engravingInput) {
    clearEngravingBtn.addEventListener("click", () => {
      engravingInput.value = "";
      AppState.customizer.engravingText = "";
      const svgText = document.getElementById("svgEngravingText");
      if (svgText) svgText.textContent = "AURA";
    });
  }

  // 5. Add Customized Bottle to Cart
  if (addCustomBtn) {
    addCustomBtn.addEventListener("click", () => {
      const customItem = {
        id: `custom-${Date.now()}`,
        name: `Custom ${AppState.customizer.modelName}`,
        categoryLabel: "Custom Built",
        capacity: AppState.customizer.capacity,
        color: AppState.customizer.colorName,
        cap: AppState.customizer.capName,
        engraving: AppState.customizer.engravingText || "None",
        price: AppState.customizer.basePrice + AppState.customizer.capPrice,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
        quantity: 1
      };

      addToCart(customItem);
      showToast(`Custom ${AppState.customizer.modelName} added to cart!`, "success");
      openCartDrawer();
    });
  }

  // Hero section quick swatches sync
  const heroSwatches = document.querySelectorAll("#heroSwatches .swatch-dot");
  heroSwatches.forEach((dot) => {
    dot.addEventListener("click", () => {
      heroSwatches.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
      showToast(`Previewing ${dot.dataset.name}`, "info");
    });
  });
}

function updateCustomizerSvgColor(stops) {
  for (let i = 1; i <= 5; i++) {
    const stopEl = document.getElementById(`bodyGradStop${i}`);
    if (stopEl && stops[i - 1]) {
      stopEl.setAttribute("stop-color", stops[i - 1]);
    }
  }
}

function updateCustomizerSvgShape(model) {
  const bottlePath = document.getElementById("bottlePath");
  const sheenRect = document.getElementById("sheenRect");
  const glossHighlight = document.getElementById("glossHighlight");

  if (!bottlePath) return;

  if (model === "daily") {
    // 750ml standard balanced bottle
    bottlePath.setAttribute(
      "d",
      "M 116 126 L 204 126 C 214 126, 230 148, 234 175 C 236 190, 236 210, 236 220 L 236 530 C 236 555, 218 565, 190 565 L 130 565 C 102 565, 84 555, 84 530 L 84 220 C 84 210, 84 190, 86 175 C 90 148, 106 126, 116 126 Z"
    );
    if (sheenRect) sheenRect.setAttribute("width", "152");
  } else if (model === "explorer") {
    // 1200ml wide rugged flask
    bottlePath.setAttribute(
      "d",
      "M 108 126 L 212 126 C 224 126, 244 145, 248 175 C 250 190, 250 210, 250 220 L 250 545 C 250 565, 230 575, 200 575 L 120 575 C 90 575, 70 565, 70 545 L 70 220 C 70 210, 70 190, 72 175 C 76 145, 96 126, 108 126 Z"
    );
    if (sheenRect) sheenRect.setAttribute("width", "180");
  } else if (model === "uvpure") {
    // 600ml sleek minimalist silhouette
    bottlePath.setAttribute(
      "d",
      "M 120 126 L 200 126 C 210 126, 224 145, 226 170 C 228 185, 228 210, 228 220 L 228 520 C 228 545, 212 555, 185 555 L 135 555 C 108 555, 92 545, 92 520 L 92 220 C 92 210, 92 185, 94 170 C 96 145, 110 126, 120 126 Z"
    );
    if (sheenRect) sheenRect.setAttribute("width", "136");
  } else if (model === "tumbler") {
    // 900ml tapered base commuter tumbler
    bottlePath.setAttribute(
      "d",
      "M 100 126 L 220 126 C 228 126, 236 140, 238 160 L 230 380 C 228 410, 215 425, 210 440 L 202 545 C 200 560, 185 565, 160 565 C 135 565, 120 560, 118 545 L 110 440 C 105 425, 92 410, 90 380 L 82 160 C 84 140, 92 126, 100 126 Z"
    );
    if (sheenRect) sheenRect.setAttribute("width", "156");
  }
}

function updateCustomizerSvgCap(capType) {
  const capLoopPath = document.getElementById("capLoopPath");
  const capLoopAccent = document.getElementById("capLoopAccent");
  const uvCapLight = document.getElementById("uvCapLight");
  const capBaseRect = document.getElementById("capBaseRect");

  if (!capLoopPath || !capBaseRect) return;

  if (capType === "straw") {
    capLoopPath.style.display = "block";
    capLoopPath.setAttribute("d", "M 125 70 C 125 35, 195 35, 195 70");
    if (capLoopAccent) capLoopAccent.style.display = "block";
    if (uvCapLight) uvCapLight.style.opacity = "0";
  } else if (capType === "twist") {
    // Round chug twist knob
    capLoopPath.style.display = "block";
    capLoopPath.setAttribute("d", "M 140 70 C 140 45, 180 45, 180 70");
    if (capLoopAccent) capLoopAccent.style.display = "none";
    if (uvCapLight) uvCapLight.style.opacity = "0";
  } else if (capType === "uvsmart") {
    // Smart flush tech cap with glowing LED ring
    capLoopPath.style.display = "none";
    if (capLoopAccent) capLoopAccent.style.display = "none";
    if (uvCapLight) {
      uvCapLight.style.opacity = "1";
      uvCapLight.setAttribute("fill", "#06b6d4");
    }
  } else if (capType === "infuser") {
    capLoopPath.style.display = "block";
    capLoopPath.setAttribute("d", "M 130 70 C 130 40, 190 40, 190 70");
    if (capLoopAccent) capLoopAccent.style.display = "block";
    if (uvCapLight) uvCapLight.style.opacity = "0";
  }
}

function updateCustomizerPriceAndBadges() {
  const total = AppState.customizer.basePrice + AppState.customizer.capPrice;
  const formatted = `$${total.toFixed(2)}`;

  const configuratorTotalPrice = document.getElementById("configuratorTotalPrice");
  const btnSummaryPrice = document.getElementById("btnSummaryPrice");
  const stageCapacityBadge = document.getElementById("stageCapacityBadge");
  const stageCapBadge = document.getElementById("stageCapBadge");

  if (configuratorTotalPrice) configuratorTotalPrice.textContent = formatted;
  if (btnSummaryPrice) btnSummaryPrice.textContent = formatted;
  if (stageCapacityBadge) stageCapacityBadge.textContent = AppState.customizer.capacity;
  if (stageCapBadge) stageCapBadge.textContent = AppState.customizer.capName;
}

// ==========================================================================
// 5. PRODUCT CATALOG GRID & FILTER TABS
// ==========================================================================
function initProductCatalog() {
  renderProductCards(PRODUCTS_DATA);

  const filterButtons = document.querySelectorAll("#catalogFilters .filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      if (filter === "all") {
        renderProductCards(PRODUCTS_DATA);
      } else {
        const filtered = PRODUCTS_DATA.filter((p) => p.category === filter);
        renderProductCards(filtered);
      }
    });
  });
}

function renderProductCards(items) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = prod.id;

    const swatchDots = prod.colors
      ? prod.colors
          .map((c) => `<span class="card-swatch-dot" style="background: ${c};"></span>`)
          .join("")
      : "";

    card.innerHTML = `
      <span class="product-badge-tag">${prod.badge}</span>
      <div class="product-img-wrap">
        <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy" />
        <div class="quick-view-overlay">
          <button class="btn btn-sm btn-outline quick-view-btn" data-id="${prod.id}">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${prod.categoryLabel} • ${prod.capacity}</span>
        <h3 class="product-title">${prod.name}</h3>
        <div class="product-ratings">
          <span class="stars">★★★★★</span>
          <span>${prod.rating} (${prod.reviewsCount.toLocaleString()})</span>
        </div>
        <div class="product-card-swatches">
          ${swatchDots}
        </div>
        <div class="product-bottom-row">
          <span class="product-price">$${prod.price.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm add-catalog-to-cart-btn" data-id="${prod.id}">
            + Add
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach dynamic button listeners
  grid.querySelectorAll(".add-catalog-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const prodId = e.currentTarget.dataset.id;
      const targetProd = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (targetProd) {
        addToCart({
          id: targetProd.id,
          name: targetProd.name,
          categoryLabel: targetProd.categoryLabel,
          capacity: targetProd.capacity,
          color: "Standard Edition",
          cap: "Included Lid",
          price: targetProd.price,
          image: targetProd.image,
          quantity: 1
        });
        showToast(`${targetProd.name} added to cart!`, "success");
        openCartDrawer();
      }
    });
  });

  grid.querySelectorAll(".quick-view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const prodId = e.currentTarget.dataset.id;
      const targetProd = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (targetProd) {
        openQuickViewModal(targetProd);
      }
    });
  });
}

// ==========================================================================
// 6. INTERACTIVE THERMAL PERFORMANCE SIMULATOR
// ==========================================================================
function initThermalSimulator() {
  const slider = document.getElementById("thermalSlider");
  const simHoursDisplay = document.getElementById("simHoursDisplay");
  const auraTempDisplay = document.getElementById("auraTempDisplay");
  const auraStatusDisplay = document.getElementById("auraStatusDisplay");
  const auraTempBar = document.getElementById("auraTempBar");

  const steelTempDisplay = document.getElementById("steelTempDisplay");
  const steelStatusDisplay = document.getElementById("steelStatusDisplay");
  const steelTempBar = document.getElementById("steelTempBar");

  const plasticTempDisplay = document.getElementById("plasticTempDisplay");
  const plasticStatusDisplay = document.getElementById("plasticStatusDisplay");
  const plasticTempBar = document.getElementById("plasticTempBar");

  const frostDegreeNumber = document.getElementById("frostDegreeNumber");
  const frostVerdictTitle = document.getElementById("frostVerdictTitle");
  const frostVerdictText = document.getElementById("frostVerdictText");
  const frostIcon = document.getElementById("frostIcon");

  if (!slider) return;

  slider.addEventListener("input", (e) => {
    const hours = parseInt(e.target.value, 10);
    AppState.thermalHours = hours;

    // Format hours display
    if (hours === 0) {
      simHoursDisplay.textContent = "0 Hours (Fresh Ice Water)";
    } else {
      simHoursDisplay.textContent = `${hours} Hours Elapsed`;
    }

    // Calculations based on real thermodynamics benchmarks:
    // AURA: starts 34°F, climbs to 39°F at 24h, 42°F at 36h
    const auraF = Math.round(34 + (hours / 36) * 8);
    const auraC = Math.round((auraF - 32) * (5 / 9));

    // Generic Single Wall: starts 34°F, reaches 68°F by hour 14, 72°F by 24h
    const steelF = Math.min(72, Math.round(34 + Math.pow(hours / 24, 0.7) * 38));
    const steelC = Math.round((steelF - 32) * (5 / 9));

    // Plastic Bottle: starts 34°F, shoots to 74°F by hour 6
    const plasticF = Math.min(74, Math.round(34 + Math.pow(hours / 8, 0.6) * 40));
    const plasticC = Math.round((plasticF - 32) * (5 / 9));

    // Update AURA card
    auraTempDisplay.textContent = `${auraF}°F / ${auraC}°C`;
    auraTempBar.style.width = `${Math.min(100, (auraF / 75) * 100)}%`;
    if (auraF < 38) {
      auraStatusDisplay.textContent = "❄️ Ice Crystals Present";
    } else if (auraF < 44) {
      auraStatusDisplay.textContent = "❄️ Frosty Refreshing";
    } else {
      auraStatusDisplay.textContent = "🧊 Chilled";
    }

    // Update Generic Steel
    steelTempDisplay.textContent = `${steelF}°F / ${steelC}°C`;
    steelTempBar.style.width = `${Math.min(100, (steelF / 75) * 100)}%`;
    if (steelF < 45) {
      steelStatusDisplay.textContent = "❄️ Cool";
    } else if (steelF < 60) {
      steelStatusDisplay.textContent = "🌤️ Tepid & Sweating";
    } else {
      steelStatusDisplay.textContent = "🔥 Warm Room Temp";
    }

    // Update Plastic
    plasticTempDisplay.textContent = `${plasticF}°F / ${plasticC}°C`;
    plasticTempBar.style.width = `${Math.min(100, (plasticF / 75) * 100)}%`;
    if (plasticF < 50) {
      plasticStatusDisplay.textContent = "🌤️ Rapidly Warming";
    } else {
      plasticStatusDisplay.textContent = "🔥 Lukewarm Plasticky";
    }

    // Update Circular Frost Gauge
    frostDegreeNumber.textContent = `${auraF}°`;
    if (hours < 18) {
      frostIcon.textContent = "❄️";
      frostVerdictTitle.textContent = "Deep Sub-Zero Lock";
      frostVerdictText.textContent = "Triple vacuum shield with copper lining repels 99.4% of radiant thermal transfer.";
    } else if (hours <= 36) {
      frostIcon.textContent = "🧊";
      frostVerdictTitle.textContent = "Crisp Retention";
      frostVerdictText.textContent = "Water remains delightfully chilled and crisp, exceeding FDA refrigerator benchmarks.";
    }
  });
}

// ==========================================================================
// 7. INTERACTIVE ECO-IMPACT CALCULATOR
// ==========================================================================
function initEcoCalculator() {
  const plasticRange = document.getElementById("plasticRange");
  const bottleCountVal = document.getElementById("bottleCountVal");
  const btnMinus = document.getElementById("btnMinusBottle");
  const btnPlus = document.getElementById("btnPlusBottle");

  const statBottles = document.getElementById("statBottlesEliminated");
  const statMoney = document.getElementById("statMoneySaved");
  const statCo2 = document.getElementById("statCo2Saved");

  function recalculateEco(daily) {
    AppState.dailyBottles = daily;
    if (bottleCountVal) bottleCountVal.textContent = daily;
    if (plasticRange) plasticRange.value = daily;

    const annualBottles = daily * 365;
    const annualMoney = annualBottles * 2.0; // average $2.00 per disposable bottle
    const annualCo2 = (annualBottles * 0.082).toFixed(1); // 82 grams CO2e per 500ml plastic bottle

    if (statBottles) statBottles.textContent = annualBottles.toLocaleString();
    if (statMoney) statMoney.textContent = `$${annualMoney.toLocaleString()}`;
    if (statCo2) statCo2.textContent = `${annualCo2} kg`;
  }

  if (plasticRange) {
    plasticRange.addEventListener("input", (e) => {
      recalculateEco(parseInt(e.target.value, 10));
    });
  }

  if (btnMinus) {
    btnMinus.addEventListener("click", () => {
      if (AppState.dailyBottles > 1) {
        recalculateEco(AppState.dailyBottles - 1);
      }
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener("click", () => {
      if (AppState.dailyBottles < 10) {
        recalculateEco(AppState.dailyBottles + 1);
      }
    });
  }

  recalculateEco(2);
}

// ==========================================================================
// 8. SHOPPING CART DRAWER SYSTEM
// ==========================================================================
function initCart() {
  const cartToggle = document.getElementById("cartToggle");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartOverlay = document.getElementById("cartOverlay");
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("cartPromoInput");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cartToggle) cartToggle.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", async () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        showToast("Please enter a code.", "info");
        return;
      }

      try {
        const res = await fetch("/api/coupon/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code })
        });
        const data = await res.json();
        if (data.valid) {
          AppState.discountCode = data.code;
          AppState.discountRate = data.discountPercent / 100;
          showToast(`Coupon ${data.code} applied: ${data.discountPercent}% OFF!`, "success");
          renderCart();
          return;
        }
      } catch (err) {
        // Fallback for direct file:// open
        if (code === "AURA15") {
          AppState.discountCode = "AURA15";
          AppState.discountRate = 0.15;
          showToast("Coupon AURA15 applied: 15% OFF!", "success");
          renderCart();
          return;
        }
      }
      showToast("Invalid discount code. Try: AURA15", "info");
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async () => {
      if (AppState.cart.length === 0) {
        showToast("Your cart is empty.", "info");
        return;
      }

      checkoutBtn.disabled = true;
      checkoutBtn.textContent = "Processing Order...";

      try {
        // Send real order to backend API
        const payload = {
          items: AppState.cart,
          discountCode: AppState.discountCode,
          customerInfo: {
            name: "Adventurer",
            email: "guest@aurabottles.com",
            shippingMethod: "Express Tracked"
          }
        };

        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        const orderRef = data.order?.id || `#AURA-${Math.floor(1000 + Math.random() * 9000)}`;
        const orderRefEl = document.getElementById("orderRefCode");
        if (orderRefEl) orderRefEl.textContent = `#${orderRef}`;

        showToast("Order confirmed and saved to backend database!", "success");
      } catch (err) {
        // Fallback if accessed via direct file open
        const fallbackRef = `#AURA-${Math.floor(1000 + Math.random() * 9000)}`;
        const orderRefEl = document.getElementById("orderRefCode");
        if (orderRefEl) orderRefEl.textContent = fallbackRef;
      }

      closeCartDrawer();
      checkoutBtn.disabled = false;
      checkoutBtn.textContent = "Secure Checkout";

      // Clear cart
      AppState.cart = [];
      saveCartToStorage();
      renderCart();

      const checkoutModal = document.getElementById("checkoutSuccessModal");
      if (checkoutModal) checkoutModal.classList.add("active");
    });
  }

  renderCart();
}

function openCartDrawer() {
  const overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.classList.add("active");
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.classList.remove("active");
}

function addToCart(item) {
  const existing = AppState.cart.find((i) => i.id === item.id);
  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    AppState.cart.push(item);
  }
  saveCartToStorage();
  renderCart();
}

function removeFromCart(id) {
  AppState.cart = AppState.cart.filter((item) => item.id !== id);
  saveCartToStorage();
  renderCart();
}

function updateQuantity(id, delta) {
  const item = AppState.cart.find((i) => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCartToStorage();
  renderCart();
}

function renderCart() {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const cartDrawerCount = document.getElementById("cartDrawerCount");
  const cartSubtotalVal = document.getElementById("cartSubtotalVal");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartDiscountVal = document.getElementById("cartDiscountVal");
  const cartShippingVal = document.getElementById("cartShippingVal");
  const cartTotalVal = document.getElementById("cartTotalVal");
  const shippingProgressBar = document.getElementById("shippingProgressBar");
  const shippingProgressText = document.getElementById("shippingProgressText");

  const totalItemCount = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItemCount;
  if (cartDrawerCount) cartDrawerCount.textContent = `${totalItemCount} Items`;

  if (!cartItemsList) return;

  if (AppState.cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <h4>Your cart is empty</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Explore our vessels or customize your own.</p>
      </div>
    `;
  } else {
    cartItemsList.innerHTML = AppState.cart
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <p class="cart-item-meta">${item.capacity} • ${item.color} ${item.engraving && item.engraving !== "None" ? `• Engraving: "${item.engraving}"` : ""}</p>
            <div class="cart-item-bottom">
              <div class="cart-qty-ctrl">
                <button type="button" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="updateQuantity('${item.id}', 1)">+</button>
              </div>
              <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
              <button type="button" class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Subtotal Calculation
  const subtotal = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (cartSubtotalVal) cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;

  // Shipping Calculation
  const freeThreshold = AppState.freeShippingThreshold;
  let shippingCost = 0.0;
  if (subtotal > 0 && subtotal < freeThreshold) {
    shippingCost = AppState.shippingRate;
    if (shippingProgressText) {
      const remaining = (freeThreshold - subtotal).toFixed(2);
      shippingProgressText.innerHTML = `Add <strong>$${remaining}</strong> more for Free Worldwide Shipping!`;
    }
    if (shippingProgressBar) {
      shippingProgressBar.style.width = `${Math.min(100, (subtotal / freeThreshold) * 100)}%`;
    }
  } else if (subtotal >= freeThreshold) {
    shippingCost = 0.0;
    if (shippingProgressText) {
      shippingProgressText.innerHTML = `🎉 <strong>You've Unlocked Free Worldwide Shipping!</strong>`;
    }
    if (shippingProgressBar) {
      shippingProgressBar.style.width = "100%";
    }
  } else {
    if (shippingProgressText) {
      shippingProgressText.innerHTML = `Add <strong>$${freeThreshold.toFixed(2)}</strong> for Free Worldwide Shipping!`;
    }
    if (shippingProgressBar) {
      shippingProgressBar.style.width = "0%";
    }
  }

  if (cartShippingVal) {
    cartShippingVal.textContent = shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`;
  }

  // Discount Calculation
  let discountAmount = 0.0;
  if (AppState.discountRate > 0 && subtotal > 0) {
    discountAmount = subtotal * AppState.discountRate;
    if (cartDiscountRow) cartDiscountRow.classList.remove("hidden");
    if (cartDiscountVal) cartDiscountVal.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (cartDiscountRow) cartDiscountRow.classList.add("hidden");
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shippingCost : 0));
  if (cartTotalVal) cartTotalVal.textContent = `$${grandTotal.toFixed(2)}`;
}

// Global scope bindings for inline onclicks
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// ==========================================================================
// 9. MODALS (Quick View & Order Confirmation)
// ==========================================================================
function initModals() {
  const productModal = document.getElementById("productModal");
  const closeProductModal = document.getElementById("closeProductModal");
  const checkoutSuccessModal = document.getElementById("checkoutSuccessModal");
  const btnContinueShopping = document.getElementById("btnContinueShopping");

  if (closeProductModal && productModal) {
    closeProductModal.addEventListener("click", () => {
      productModal.classList.remove("active");
    });
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) productModal.classList.remove("active");
    });
  }

  if (checkoutSuccessModal) {
    checkoutSuccessModal.addEventListener("click", (e) => {
      if (e.target === checkoutSuccessModal) checkoutSuccessModal.classList.remove("active");
    });
  }

  if (btnContinueShopping && checkoutSuccessModal) {
    btnContinueShopping.addEventListener("click", () => {
      checkoutSuccessModal.classList.remove("active");
    });
  }
}

function openQuickViewModal(product) {
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImg");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalReviews = document.getElementById("modalReviews");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalSpecs = document.getElementById("modalSpecs");
  const modalAddToCart = document.getElementById("modalAddToCart");

  if (!modal) return;

  if (modalImg) modalImg.src = product.image;
  if (modalCategory) modalCategory.textContent = `${product.categoryLabel} • ${product.capacity}`;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalReviews) modalReviews.textContent = `${product.rating} (${product.reviewsCount.toLocaleString()} reviews)`;
  if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
  if (modalDescription) modalDescription.textContent = product.description;

  if (modalSpecs && product.specs) {
    modalSpecs.innerHTML = product.specs.map((s) => `<span>${s}</span>`).join("");
  }

  if (modalAddToCart) {
    modalAddToCart.onclick = () => {
      addToCart({
        id: product.id,
        name: product.name,
        categoryLabel: product.categoryLabel,
        capacity: product.capacity,
        color: "Standard Finish",
        cap: "Standard Cap",
        price: product.price,
        image: product.image,
        quantity: 1
      });
      modal.classList.remove("active");
      showToast(`${product.name} added to cart!`, "success");
      openCartDrawer();
    };
  }

  modal.classList.add("active");
}

// ==========================================================================
// 10. GENERAL PAGE INTERACTIONS
// ==========================================================================
function initGeneralInteractions() {
  // Mobile Nav Drawer
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((f) => f.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Announcement Bar Promo Copy & Close
  const closeAnnouncement = document.getElementById("closeAnnouncement");
  const announcementBar = document.getElementById("announcementBar");
  const copyPromo = document.getElementById("copyPromo");

  if (closeAnnouncement && announcementBar) {
    closeAnnouncement.addEventListener("click", () => {
      announcementBar.style.display = "none";
    });
  }

  if (copyPromo) {
    copyPromo.addEventListener("click", () => {
      navigator.clipboard.writeText("AURA15").then(() => {
        showToast("Coupon 'AURA15' copied to clipboard!", "success");
      });
    });
  }

  // Newsletter Form Submission (Linked to Real Backend)
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterSuccess = document.getElementById("newsletterSuccess");
  const couponReveal = document.getElementById("couponReveal");

  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail").value.trim();
      if (email) {
        try {
          await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
          });
        } catch (err) {
          // graceful fallback
        }

        newsletterForm.style.display = "none";
        newsletterSuccess.classList.remove("hidden");
        showToast("Subscribed! 15% coupon code copied!", "success");
        navigator.clipboard.writeText("AURA15");
      }
    });
  }

  // Check Backend Live Status
  checkBackendStatus();

  if (couponReveal) {
    couponReveal.addEventListener("click", () => {
      navigator.clipboard.writeText("AURA15").then(() => {
        showToast("Coupon 'AURA15' copied to clipboard!", "success");
      });
    });
  }

  // Search Button quick notification
  const searchToggle = document.getElementById("searchToggle");
  if (searchToggle) {
    searchToggle.addEventListener("click", () => {
      const catalogEl = document.getElementById("products");
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: "smooth" });
        showToast("Showing complete collection below", "info");
      }
    });
  }
}

// ==========================================================================
// 11. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : ""}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "ℹ"}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 12. BACKEND CONNECTIVITY DETECTOR
// ==========================================================================
async function checkBackendStatus() {
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    if (data && data.status === "ok") {
      const headerActions = document.querySelector(".header-actions");
      if (headerActions && !document.getElementById("backendPill")) {
        const badge = document.createElement("a");
        badge.id = "backendPill";
        badge.href = "/admin";
        badge.title = "Backend is online! Click to open Admin Explorer";
        badge.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          text-decoration: none;
          white-space: nowrap;
        `;
        badge.innerHTML = `<span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></span> Backend Live`;
        headerActions.insertBefore(badge, headerActions.firstChild);
      }
    }
  } catch (err) {
    // Offline or static file mode
  }
}

