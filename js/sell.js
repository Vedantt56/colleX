function getEditId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("edit");
}

function renderSellForm() {
  const main = document.querySelector("main");
  const editId = getEditId();

  const listings =
    JSON.parse(localStorage.getItem("collex_my_listings")) || [];

  const editingItem = editId
    ? listings.find(item => item.id.toString() === editId)
    : null;

  main.innerHTML = `
    <div class="bg-gray-50 dark:bg-collex-darker min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div class="max-w-3xl mx-auto">

        <!-- HEADER -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            ${editingItem ? "Edit Listing" : "Sell Your Gear"}
          </h1>
          <div class="w-12 h-1 bg-collex-teal mx-auto mt-4 mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400 uppercase tracking-wide text-sm">
            ${editingItem ? "Update your item details." : "Turn unused items into cash."}
          </p>
        </div>

        <!-- FORM CARD -->
        <div class="bg-white dark:bg-collex-dark shadow-xl border border-gray-100 dark:border-gray-800 rounded-2xl">
          <form id="sellForm" class="p-8 md:p-12 space-y-8">

            <!-- IMAGE UPLOAD -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-2">
                Photos
              </label>

              <div id="uploadBox"
                class="flex flex-col items-center justify-center px-6 py-10 
                       border-2 border-dashed border-gray-200 dark:border-gray-700 
                       rounded-xl cursor-pointer hover:border-collex-teal 
                       hover:bg-gray-50 dark:hover:bg-gray-800 transition">

                <p class="text-gray-500 text-sm">Click to upload images (PNG, JPG)</p>
                <p class="text-xs text-gray-400 mt-1">Max 5 images</p>

                <input id="imageInput" type="file" accept="image/*" multiple class="hidden">
              </div>

              <div id="previewGrid" class="grid grid-cols-3 gap-4 mt-4"></div>
            </div>

            <!-- FIELDS -->
            <div class="grid sm:grid-cols-6 gap-6">

              <div class="sm:col-span-4">
                <label class="block text-xs font-bold uppercase mb-2">Item Title</label>
                <input id="titleInput" required
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded-xl">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-bold uppercase mb-2">Price</label>
                <input id="priceInput" type="number" required
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded-xl">
              </div>

              <div class="sm:col-span-3">
                <label class="block text-xs font-bold uppercase mb-2">Category</label>
                <select id="categoryInput"
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded-xl">
                  <option>TEXTBOOKS</option>
                  <option>ELECTRONICS</option>
                  <option>FURNITURE</option>
                  <option>CLOTHING</option>
                  <option>SPORTS</option>
                </select>
              </div>

              <div class="sm:col-span-3">
                <label class="block text-xs font-bold uppercase mb-2">Condition</label>
                <select id="conditionInput"
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded-xl">
                  <option>New</option>
                  <option>Like New</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>

              <div class="sm:col-span-6">
                <label class="block text-xs font-bold uppercase mb-2">Description</label>
                <textarea id="descriptionInput" rows="5"
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded-xl"></textarea>
              </div>
            </div>

            <!-- SUBMIT -->
            <div class="flex justify-end pt-6 border-t border-gray-100 dark:border-gray-800">
              <button id="submitBtn"
                class="bg-collex-teal text-white font-bold py-4 px-10 
                       uppercase tracking-widest text-sm rounded-xl 
                       hover:bg-black transition">
                ${editingItem ? "Update Listing" : "Publish Listing"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  `;

  /* ---------- IMAGE LOGIC ---------- */
  const uploadBox = document.getElementById("uploadBox");
  const imageInput = document.getElementById("imageInput");
  const previewGrid = document.getElementById("previewGrid");

  let images = editingItem ? [...(editingItem.images || [])] : [];

  function renderPreviews() {
    previewGrid.innerHTML = "";
    images.forEach((src, index) => {
      previewGrid.innerHTML += `
        <div class="relative group">
          <img src="${src}" class="w-full h-24 object-cover rounded-xl border">
          <button onclick="removeImage(${index})"
            class="absolute top-1 right-1 w-6 h-6 bg-black/70 text-white 
                   text-xs rounded-full opacity-0 group-hover:opacity-100 transition">
            ✕
          </button>
        </div>
      `;
    });
  }

  uploadBox.addEventListener("click", () => imageInput.click());

  imageInput.addEventListener("change", () => {
    const files = Array.from(imageInput.files);

    files.forEach(file => {
      if (!file.type.startsWith("image/")) return;
      if (images.length >= 5) return;

      const reader = new FileReader();
      reader.onload = e => {
        images.push(e.target.result);
        renderPreviews();
      };
      reader.readAsDataURL(file);
    });

    imageInput.value = "";
  });

  window.removeImage = function (index) {
    images.splice(index, 1);
    renderPreviews();
  };

  /* ---------- PREFILL (EDIT MODE) ---------- */
  if (editingItem) {
    document.getElementById("titleInput").value = editingItem.title;
    document.getElementById("priceInput").value = editingItem.price;
    document.getElementById("categoryInput").value = editingItem.category;
    document.getElementById("conditionInput").value = editingItem.condition;
    document.getElementById("descriptionInput").value = editingItem.description || "";
    renderPreviews();
  }

  /* ---------- SUBMIT ---------- */
  const form = document.getElementById("sellForm");
  const btn = document.getElementById("submitBtn");

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (editingItem) {
      const index = listings.findIndex(i => i.id.toString() === editId);
      listings[index] = {
        ...listings[index],
        title: titleInput.value.trim(),
        price: priceInput.value,
        category: categoryInput.value,
        condition: conditionInput.value,
        description: descriptionInput.value.trim(),
        images,
      };
    } else {
      listings.unshift({
        id: Date.now(),
        title: titleInput.value.trim(),
        price: priceInput.value,
        category: categoryInput.value,
        condition: conditionInput.value,
        description: descriptionInput.value.trim(),
        images,
        postedAt: new Date().toISOString(),
      });
    }

    localStorage.setItem("collex_my_listings", JSON.stringify(listings));

    btn.textContent = "Saving...";
    btn.disabled = true;
    btn.classList.add("opacity-70");

    setTimeout(renderSuccess, 1000);
  });
}

function renderSuccess() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="min-h-[70vh] flex items-center justify-center px-4">
      <div class="bg-white dark:bg-collex-dark p-10 shadow-lg text-center max-w-md w-full border rounded-2xl">
        <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full 
                    flex items-center justify-center mx-auto mb-6 text-2xl">
          ✔
        </div>
        <h2 class="text-2xl font-black uppercase mb-4">Saved!</h2>
        <p class="text-gray-500 mb-8">Your changes are live.</p>
        <a href="my-listings.html"
          class="w-full inline-block bg-collex-teal text-white py-4 font-bold 
                 uppercase tracking-widest rounded-xl hover:bg-black">
          Back to My Listings
        </a>
      </div>
    </div>
  `;
}

renderSellForm();
