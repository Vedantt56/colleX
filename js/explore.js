const PRODUCTS = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals",
    price: 45,
    category: "TEXTBOOKS",
    image: "https://images.unsplash.com/photo-1544716278-ca83adff9d51?q=80&w=400",
    seller: "John D.",
    condition: "Good",
  },
  {
    id: 2,
    title: "Sony WH-1000XM4 Headphones",
    price: 180,
    category: "ELECTRONICS",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400",
    seller: "Sarah M.",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Dorm Mini Fridge",
    price: 60,
    category: "FURNITURE",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
    seller: "Mike R.",
    condition: "Fair",
  },
  {
    id: 4,
    title: "Scientific Calculator TI-84",
    price: 85,
    category: "ELECTRONICS",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee1f620?q=80&w=400",
    seller: "Emily W.",
    condition: "Good",
  },
  {
    id: 5,
    title: "Intro to Psychology",
    price: 30,
    category: "TEXTBOOKS",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400",
    seller: "Chris L.",
    condition: "Fair",
  },
  {
    id: 6,
    title: "University Hoodie",
    price: 25,
    category: "CLOTHING",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400",
    seller: "Jessica P.",
    condition: "New",
  },
  {
    id: 7,
    title: "Desk Lamp LED",
    price: 15,
    category: "FURNITURE",
    image: "https://images.unsplash.com/photo-1534281303154-080c982d6265?q=80&w=400",
    seller: "David K.",
    condition: "Like New",
  },
  {
    id: 8,
    title: "Tennis Racket",
    price: 40,
    category: "SPORTS",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=400",
    seller: "Anna B.",
    condition: "Good",
  },
];

function renderExplore() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <!-- HEADER -->
    <div class="bg-white/95 dark:bg-collex-dark/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-4">
        <h1 class="text-2xl font-black uppercase text-gray-900 dark:text-white">
          Explore Listings
        </h1>

        <div class="flex gap-3">
          <input id="searchInput" type="text"
            placeholder="Search gear..."
            class="px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm w-64">

          <select id="categorySelect"
            class="px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm">
            <option value="All">All Categories</option>
            <option>TEXTBOOKS</option>
            <option>ELECTRONICS</option>
            <option>FURNITURE</option>
            <option>CLOTHING</option>
            <option>SPORTS</option>
          </select>
        </div>
      </div>
    </div>

    <!-- GRID -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div id="productGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 items-start">
      </div>
    </div>
  `;

  const grid = document.getElementById("productGrid");
  PRODUCTS.forEach(p => grid.innerHTML += ProductCard(p));
}

renderExplore();
