document.querySelector("main").innerHTML = `
  <div class="animate-fade-in flex flex-col">

    <!-- HERO SECTION -->
    <section class="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="Campus Lifestyle"
          class="w-full h-full object-cover opacity-90"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/10"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
          Collex Is <br class="md:hidden" /> Campus
        </h1>

        <div class="w-24 h-1 bg-collex-teal mx-auto mb-8 shadow-lg"></div>

        <p class="text-white text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Introduced in 2024. The new standard for sustainable student exchange.
          <br class="hidden md:block" />
          Buy. Sell. Connect. Without the hassle.
        </p>

        <button
          onclick="navigate('explore')"
          class="bg-collex-teal hover:bg-white hover:text-black text-white text-sm font-bold py-4 px-10 uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,196,204,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          Discover Now
        </button>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="py-24 bg-white dark:bg-collex-darker transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Why Collex?
          </h2>
          <div class="w-12 h-1 bg-gray-200 dark:bg-gray-800 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-12">

          ${featureCard("💰", "Student Budget Friendly",
            "Skip the bookstore markups. Buy used textbooks and gear directly from peers at prices that actually make sense for a student budget.")}

          ${featureCard("🌱", "Sustainable Future",
            "Reduce campus waste. Give electronics, furniture, and books a second life instead of sending them to the landfill.")}

          ${featureCard("👥", "Trusted Community",
            "Verified student emails only. Meet on campus in safe, public zones. Build a reputation within your university network.")}

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 bg-collex-teal overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="relative z-10 text-center">
        <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
          Ready to clear your dorm?
        </h2>
        <button
          onclick="navigate('sell')"
          class="bg-white text-black hover:bg-black hover:text-white font-bold py-4 px-12 uppercase tracking-widest text-sm transition-all duration-300"
        >
          Start Selling
        </button>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
            How It Works
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mt-4 md:mt-0 font-medium">
            Simple. Secure. Smart.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          ${stepCard("01", "📘", "List It", "Snap a photo. Write a quick description. Set your price. Your item is live in seconds.")}
          ${stepCard("02", "💬", "Connect", "Chat securely within the app. Agree on a price and a public meeting spot on campus.")}
          ${stepCard("03", "💵", "Exchange", "Meet up. Check the item. Pay and go. No shipping fees, no waiting times.")}
        </div>

        <div class="mt-16 text-center">
          <button
            onclick="navigate('sell')"
            class="inline-flex items-center text-gray-900 dark:text-white font-bold hover:text-collex-teal transition-colors text-sm uppercase tracking-widest"
          >
            Become a Seller →
          </button>
        </div>
      </div>
    </section>

  </div>
`;

function featureCard(icon, title, text) {
  return `
    <div class="group p-8 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-collex-dark hover:border-collex-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div class="text-4xl mb-6">${icon}</div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
        ${title}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        ${text}
      </p>
    </div>
  `;
}

function stepCard(step, icon, title, text) {
  return `
    <div class="relative bg-white dark:bg-collex-darker p-8 rounded-lg">
      <span class="text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-4">${step}</span>
      <div class="mt-8">
        <div class="text-3xl mb-4">${icon}</div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">${title}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">${text}</p>
      </div>
    </div>
  `;
}
