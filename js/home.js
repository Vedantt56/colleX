function renderHome() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <!-- HERO -->
    <section class="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          class="w-full h-full object-cover opacity-90"
          alt="Campus"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/10"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tight mb-6 fade-up visible">
          Colle<span class="text-collex-teal">X</span><br class="md:hidden" />
          Is Campus
        </h1>

        <div class="w-24 h-1 bg-collex-teal mx-auto mb-8 fade-up visible delay-1"></div>

        <p class="text-white text-xs md:text-sm uppercase tracking-[0.25em] font-bold mb-12 max-w-2xl mx-auto leading-relaxed fade-up visible delay-2">
          College + Exchange . The new standard for sustainable student exchange.
          <br class="hidden md:block"/>
          Buy. Sell. Connect. Without the hassle.
        </p>

        <div class="fade-up visible delay-3">
          <button
            onclick="window.location.href='pages/explore.html'"
            class="bg-collex-teal text-white text-sm font-bold py-4 px-12 uppercase tracking-widest rounded-full
                   transition-all duration-300 hover:bg-white hover:text-black
                   hover:shadow-[0_10px_30px_rgba(20,184,166,0.4)] hover:-translate-y-1"
          >
            Discover Now
          </button>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="py-24 bg-white dark:bg-collex-darker">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 fade-up">
          <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
            Why Colle<span class="text-collex-teal">X</span>?
          </h2>
          <div class="w-12 h-1 bg-gray-200 dark:bg-gray-800 mx-auto mt-4"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
          ${featureCard("💸", "Student Budget Friendly", "Skip bookstore markups. Buy directly from peers at prices that make sense.", "delay-1")}
          ${featureCard("🌱", "Sustainable Future", "Reduce campus waste by giving books, furniture and tech a second life.", "delay-2")}
          ${featureCard("👥", "Trusted Community", "Verified students only. Meet safely on campus. Build reputation locally.", "delay-3")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-collex-teal text-center">
      <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-8 fade-up">
        Ready to clear your dorm?
      </h2>
      <div class="fade-up delay-1">
        <button
          onclick="window.location.href='pages/sell.html'"
          class="bg-white text-black font-bold py-4 px-14 uppercase tracking-widest rounded-full
                 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
        >
          Start Selling
        </button>
      </div>
    </section>
  `;

  observeAnimations();
}

function featureCard(icon, title, text, delay) {
  return `
    <div class="p-8 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-collex-dark
                hover:border-collex-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                fade-up ${delay}">
      <div class="text-4xl mb-6">${icon}</div>
      <h3 class="text-xl font-bold uppercase tracking-wide mb-3 text-gray-900 dark:text-white">
        ${title}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        ${text}
      </p>
    </div>
  `;
}

/* 🔁 REPEATABLE SCROLL ANIMATION */
function observeAnimations() {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  elements.forEach(el => observer.observe(el));
}

renderHome();
