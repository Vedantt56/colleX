function ProductCard(product) {
  return `
    <div class="bg-white dark:bg-collex-dark border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-collex-teal transition-colors duration-300 flex flex-col h-full group">

      <!-- IMAGE -->
      <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute top-3 right-3 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          ${product.condition}
        </div>
      </div>

      <!-- CONTENT -->
      <div class="p-5 flex-1 flex flex-col">
        <h3 class="font-bold text-gray-900 dark:text-white uppercase tracking-tight text-lg line-clamp-1 mb-2">
          ${product.title}
        </h3>

        <span class="font-bold text-collex-teal text-xl mb-3">
          $${product.price}
        </span>

        <p class="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide mb-6 flex items-center">
          🏷️ ${product.category}
        </p>

        <!-- FOOTER -->
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
          <div class="flex items-center">
            👤 <span class="ml-2 truncate max-w-[100px]">${product.seller}</span>
          </div>
          <button class="text-gray-900 dark:text-white hover:text-collex-teal transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  `;
}
