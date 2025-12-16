const PRODUCTS = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals",
    price: 500,
    category: "TEXTBOOKS",
    image: "../assets/images/calucaltor.png",
    seller: "John D.",
    condition: "Good",
    location: "Student Library",
    usage: "2 Semesters",
    description:
      "Used for Calc 1 and 2. Some highlighting in the first few chapters but otherwise in great condition.",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Sony WH-1000XM4 Headphones",
    price: 5000,
    category: "ELECTRONICS",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800",
    seller: "Sarah M.",
    condition: "Like New",
    location: "North Dorms",
    usage: "3 Months",
    description: "Barely used. Comes with original case and charging cable.",
    posted: "5 hours ago",
  },
  {
    id: 3,
    title: "Drafter",
    price: 100,
    category: "TOOL",
    image: "../assets/images/drafter.png",
    seller: "Mike R.",
    condition: "Fair",
    location: "West Apartments",
    usage: "6 months",
    description: "Almost new drafter, rarely used",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Mouse Pad",
    price: 85,
    category: "OTHERS",
    image: "../assets/images/pad.png",
    seller: "Emily W.",
    condition: "Good",
    location: "Science Block",
    usage: "1 Year",
    description: "Very useful for CS students",
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "Intro to Psychology Textbook",
    price: 50,
    category: "TEXTBOOKS",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800",
    seller: "Chris L.",
    condition: "Fair",
    location: "Central Library",
    usage: "1 Semester",
    description: "Pages are clean. Cover slightly worn.",
    posted: "1 day ago",
  },
  {
    id: 6,
    title: "University Hoodie",
    price: 300,
    category: "CLOTHING",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800",
    seller: "Jessica P.",
    condition: "New",
    location: "Hostel Block B",
    usage: "Never Worn",
    description: "Wrong size ordered. Tags still attached.",
    posted: "6 hours ago",
  },
  {
    id: 7,
    title: "LED Study Desk Lamp",
    price: 150,
    category: "FURNITURE",
    image: "../assets/images/lamp.png",
    seller: "David K.",
    condition: "Like New",
    location: "East Dorms",
    usage: "6 Months",
    description: "Adjustable brightness. USB charging port.",
    posted: "2 weeks ago",
  },
  {
    id: 8,
    title: "Tennis Racket",
    price: 600,
    category: "SPORTS",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800",
    seller: "Anna B.",
    condition: "Good",
    location: "Sports Complex",
    usage: "1 Season",
    description: "Good grip and balance.",
    posted: "3 days ago",
  },
];

let activeCategory = "All";

/* ---------- PAGE ---------- */
function renderExplore() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="border-b border-gray-200 bg-white">
      <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-6">
        <h1 class="text-3xl font-black uppercase">Explore Listings</h1>

        <select id="categorySelect"
          class="px-4 py-3 rounded-xl bg-gray-50 border text-sm">
          <option value="All">All Categories</option>
          <option>TEXTBOOKS</option>
          <option>ELECTRONICS</option>
          <option>FURNITURE</option>
          <option>CLOTHING</option>
          <option>SPORTS</option>
          <option>TOOL</option>
          <option>OTHERS</option>
        </select>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-14">
      <div id="productGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      </div>
    </section>

    <div id="modalRoot"></div>
  `;

  document.getElementById("categorySelect").addEventListener("change", e => {
    activeCategory = e.target.value;
    renderGrid();
  });

  renderGrid();
}

/* ---------- GRID ---------- */
function renderGrid() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);

  filtered.forEach(p => {
    grid.innerHTML += ProductCard(p);
  });
}

/* ---------- PRODUCT MODAL ---------- */
window.openProductModal = function (id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const oldPrice = Math.round(p.price * 1.2);

  document.getElementById("modalRoot").innerHTML = `
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                flex items-center justify-center px-4"
         onclick="closeProductModal(event)">

      <div class="bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex"
           onclick="event.stopPropagation()">

        <!-- IMAGE -->
        <div class="w-1/2 relative">
          <img src="${p.image}" class="w-full h-full object-cover" />

          <span class="absolute bottom-4 left-4 
                       bg-black text-white text-xs font-bold 
                       px-3 py-1 rounded-full uppercase">
            ${p.condition}
          </span>
        </div>

        <!-- CONTENT -->
        <div class="w-1/2 p-10 relative overflow-y-auto">
          <button onclick="closeProductModal()"
                  class="absolute top-6 right-6 text-2xl font-bold">✕</button>

          <p class="text-collex-teal text-xs font-bold uppercase mb-3">
            ${p.category}
          </p>

          <h2 class="text-4xl font-black mb-4">
            ${p.title}
          </h2>

          <div class="flex items-center gap-4 mb-8">
            <span class="text-3xl font-bold">₹${p.price}</span>
            <span class="text-gray-400 line-through">₹${oldPrice}</span>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="border rounded-xl p-4">
              <p class="text-xs text-gray-400 uppercase">Location</p>
              <p class="font-bold">${p.location}</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="text-xs text-gray-400 uppercase">Usage</p>
              <p class="font-bold">${p.usage}</p>
            </div>
          </div>

          <p class="text-xs uppercase font-bold text-gray-400 mb-2">
            Description
          </p>
          <p class="border-l-4 border-collex-teal pl-4 text-gray-600 mb-8">
            ${p.description}
          </p>

          <div class="flex items-center gap-4 mb-10">
            <div class="w-10 h-10 rounded-full bg-gray-200 
                        flex items-center justify-center font-bold">
              ${p.seller[0]}
            </div>
            <div>
              <p class="font-bold">${p.seller}</p>
              <p class="text-xs text-gray-400">Posted ${p.posted}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <button onclick="openChatPage(${p.id})"
              class="flex-1 bg-collex-teal text-white py-4 
                     font-bold uppercase rounded-xl">
              Contact Seller
            </button>

            <button class="w-14 h-14 border rounded-xl text-xl">
              ♥
            </button>
          </div>

        </div>
      </div>
    </div>
  `;
};

/* ---------- CHAT REDIRECT ---------- */
window.openChatPage = function (id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const seller = encodeURIComponent(p.seller);
  const product = encodeURIComponent(p.title);

  window.location.href = `chat.html?seller=${seller}&product=${product}`;
};

/* ---------- CLOSE MODAL ---------- */
window.closeProductModal = function (e) {
  if (!e || e.target.classList.contains("fixed")) {
    document.getElementById("modalRoot").innerHTML = "";
  }
};

renderExplore();
