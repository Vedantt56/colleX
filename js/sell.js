function renderSellForm() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="bg-gray-50 dark:bg-collex-darker min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div class="max-w-3xl mx-auto">

        <div class="text-center mb-12">
          <h1 class="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Sell Your Gear
          </h1>
          <div class="w-12 h-1 bg-collex-teal mx-auto mt-4 mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400 uppercase tracking-wide text-sm">
            Turn unused items into cash.
          </p>
        </div>

        <div class="bg-white dark:bg-collex-dark shadow-xl border border-gray-100 dark:border-gray-800">
          <form id="sellForm" class="p-8 md:p-12 space-y-8">

            <!-- IMAGE UPLOAD -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-2">
                Photos
              </label>
              <div class="flex justify-center px-6 pt-10 pb-10 border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-collex-teal hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
                <p class="text-gray-500 text-sm">Upload a file (PNG, JPG)</p>
                <input type="file" class="hidden">
              </div>
            </div>

            <!-- FIELDS -->
            <div class="grid sm:grid-cols-6 gap-6">

              <div class="sm:col-span-4">
                <label class="block text-xs font-bold uppercase mb-2">Item Title</label>
                <input required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-bold uppercase mb-2">Price</label>
                <input type="number" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              </div>

              <div class="sm:col-span-3">
                <label class="block text-xs font-bold uppercase mb-2">Category</label>
                <select class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <option>TEXTBOOKS</option>
                  <option>ELECTRONICS</option>
                  <option>FURNITURE</option>
                  <option>CLOTHING</option>
                  <option>SPORTS</option>
                </select>
              </div>

              <div class="sm:col-span-3">
                <label class="block text-xs font-bold uppercase mb-2">Condition</label>
                <select class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <option>New</option>
                  <option>Like New</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>

              <div class="sm:col-span-6">
                <label class="block text-xs font-bold uppercase mb-2">Description</label>
                <textarea rows="5" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"></textarea>
              </div>
            </div>

            <!-- SUBMIT -->
            <div class="flex justify-end pt-6 border-t border-gray-100 dark:border-gray-800">
              <button id="submitBtn" class="bg-collex-teal text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-black transition">
                Publish Listing
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById("sellForm");
  const btn = document.getElementById("submitBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.textContent = "Processing...";
    btn.disabled = true;
    btn.classList.add("opacity-70");

    setTimeout(renderSuccess, 1500);
  });
}

function renderSuccess() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="min-h-[70vh] flex items-center justify-center px-4">
      <div class="bg-white dark:bg-collex-dark p-10 shadow-lg text-center max-w-md w-full border">
        <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          ✔
        </div>
        <h2 class="text-2xl font-black uppercase mb-4">Listed!</h2>
        <p class="text-gray-500 mb-8">Your item is now live.</p>
        <button onclick="renderSellForm()" class="w-full bg-collex-teal text-white py-4 font-bold uppercase tracking-widest hover:bg-black">
          List Another
        </button>
      </div>
    </div>
  `;
}

renderSellForm();
