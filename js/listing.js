function renderMyListings() {
  const main = document.querySelector("main");

  const listings =
    JSON.parse(localStorage.getItem("collex_my_listings")) || [];

  main.innerHTML = `
    <section class="max-w-7xl mx-auto px-6 py-14">

      <div class="mb-12">
        <h1 class="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
          My Listings
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Items you have listed for sale
        </p>
      </div>

      ${
        listings.length === 0
          ? renderEmptyState()
          : `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              ${listings.map(renderListingCard).join("")}
            </div>
          `
      }

    </section>

    <!-- MODAL ROOT -->
    <div id="modalRoot"></div>
  `;
}

/* ---------- EMPTY STATE ---------- */
function renderEmptyState() {
  return `
    <div class="text-center py-20">
      <div class="text-6xl mb-6">📦</div>
      <h2 class="text-xl font-black uppercase mb-2">
        No listings yet
      </h2>
      <p class="text-gray-500 mb-6">
        Items you list will appear here.
      </p>
      <a href="sell.html"
        class="inline-block bg-collex-teal text-white px-8 py-4 
               font-bold uppercase tracking-widest rounded-xl hover:bg-black transition">
        Sell an Item
      </a>
    </div>
  `;
}

/* ---------- CARD ---------- */
function renderListingCard(item) {
  const img = item.images?.[0] || "";

  return `
    <div
      onclick="openMyListingModal(${item.id})"
      class="bg-white dark:bg-collex-dark rounded-2xl border 
             border-gray-100 dark:border-gray-800 overflow-hidden 
             shadow-sm cursor-pointer hover:shadow-lg transition">

      <div class="aspect-[4/3] bg-gray-100">
        ${
          img
            ? `<img src="${img}" class="w-full h-full object-cover">`
            : `<div class="flex items-center justify-center h-full text-gray-400">
                No Image
               </div>`
        }
      </div>

      <div class="p-5 flex flex-col">
        <h3 class="font-bold uppercase tracking-tight text-gray-900 dark:text-white line-clamp-1">
          ${item.title}
        </h3>

        <span class="text-collex-teal font-bold text-lg mt-2">
          ₹${item.price}
        </span>

        <p class="text-xs uppercase text-gray-500 mt-2">
          ${item.category} · ${item.condition}
        </p>

        <p class="text-xs text-gray-400 mt-4">
          Posted ${formatDate(item.postedAt)}
        </p>

        <!-- ACTIONS -->
        <div class="flex gap-3 mt-4" onclick="event.stopPropagation()">
          <button
            onclick="editListing(${item.id})"
            class="flex-1 py-2 text-xs font-bold uppercase 
                   border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            Edit
          </button>

          <button
            onclick="deleteListing(${item.id})"
            class="flex-1 py-2 text-xs font-bold uppercase 
                   text-red-500 border border-red-200 rounded-lg 
                   hover:bg-red-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- MODAL (DETAIL VIEW) ---------- */
window.openMyListingModal = function (id) {
  const listings =
    JSON.parse(localStorage.getItem("collex_my_listings")) || [];

  const item = listings.find(l => l.id === id);
  if (!item) return;

  const img = item.images?.[0] || "";

  document.getElementById("modalRoot").innerHTML = `
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                flex items-center justify-center px-4"
         onclick="closeMyListingModal(event)">

      <div class="bg-white dark:bg-collex-dark 
                  w-full max-w-5xl rounded-3xl overflow-hidden 
                  shadow-2xl flex"
           onclick="event.stopPropagation()">

        <!-- IMAGE -->
        <div class="w-1/2 bg-gray-100 flex items-center justify-center">
          ${
            img
              ? `<img src="${img}" class="max-h-[420px] w-full object-contain">`
              : `<div class="text-gray-400">No Image</div>`
          }
        </div>

        <!-- CONTENT -->
        <div class="w-1/2 p-8 relative overflow-y-auto">
          <button
            onclick="closeMyListingModal()"
            class="absolute top-4 right-4 text-2xl font-bold">
            ✕
          </button>

          <p class="text-collex-teal text-xs font-bold uppercase mb-2">
            ${item.category}
          </p>

          <h2 class="text-3xl font-black uppercase mb-4">
            ${item.title}
          </h2>

          <p class="text-3xl font-bold mb-6">
            ₹${item.price}
          </p>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="border rounded-xl p-4">
              <p class="text-xs uppercase text-gray-400">Condition</p>
              <p class="font-bold">${item.condition}</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="text-xs uppercase text-gray-400">Posted</p>
              <p class="font-bold">${formatDate(item.postedAt)}</p>
            </div>
          </div>

          <p class="text-xs uppercase font-bold text-gray-400 mb-2">
            Description
          </p>
          <p class="border-l-4 border-collex-teal pl-4 text-gray-600">
            ${item.description || "No description provided."}
          </p>
        </div>
      </div>
    </div>
  `;
};

/* ---------- CLOSE MODAL ---------- */
window.closeMyListingModal = function (e) {
  if (!e || e.target.classList.contains("fixed")) {
    document.getElementById("modalRoot").innerHTML = "";
  }
};

/* ---------- DELETE (ACTUAL) ---------- */
window.deleteListing = function (id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this listing?"
  );

  if (!confirmDelete) return;

  const listings =
    JSON.parse(localStorage.getItem("collex_my_listings")) || [];

  const updated = listings.filter(item => item.id !== id);

  localStorage.setItem(
    "collex_my_listings",
    JSON.stringify(updated)
  );

  renderMyListings();
};

/* ---------- EDIT ---------- */
window.editListing = function (id) {
  window.location.href = `sell.html?edit=${id}`;
};

/* ---------- UTIL ---------- */
function formatDate(date) {
  if (!date) return "Recently";

  const d = new Date(date);
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

renderMyListings();
