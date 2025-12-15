function Navbar() {
  let isOpen = false;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  function navigate(page) {
    isOpen = false;

    const isRoot = !window.location.pathname.includes("/pages/");

    if (page === "home") {
      window.location.href = isRoot ? "index.html" : "../index.html";
    }

    if (page === "explore") {
      window.location.href = isRoot ? "pages/explore.html" : "explore.html";
    }

    if (page === "sell") {
      window.location.href = isRoot ? "pages/sell.html" : "sell.html";
    }

    if (page === "login") {
      window.location.href = isRoot ? "pages/login.html" : "login.html";
    }
  }

  function isActive(page) {
    if (page === "home" && currentPage === "index.html") return true;
    return currentPage === `${page}.html`;
  }

  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    renderNavbar();
  }

  function isDarkMode() {
    return document.documentElement.classList.contains("dark");
  }

  function navButton(label, page) {
    return `
      <button onclick="navigate('${page}')" class="text-sm font-bold uppercase tracking-wider ${
        isActive(page)
          ? "text-collex-teal"
          : "text-gray-600 dark:text-gray-300"
      } hover:text-collex-teal">
        ${label}
      </button>
    `;
  }

  function mobileButton(label, page) {
    return `
      <button onclick="navigate('${page}')" class="block w-full text-left px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wider ${
        isActive(page)
          ? "bg-gray-100 dark:bg-gray-800 text-collex-teal"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
      }">
        ${label}
      </button>
    `;
  }

  function renderNavbar() {
    document.getElementById("navbar").innerHTML = `
      <nav class="bg-white/90 dark:bg-collex-dark/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">

            <div class="flex items-center cursor-pointer space-x-2" onclick="navigate('home')">
              <div class="bg-collex-dark dark:bg-white p-1.5 rounded-lg">🛍️</div>
              <span class="font-extrabold text-xl tracking-tighter text-gray-900 dark:text-white uppercase">COLLEX</span>
            </div>

            <div class="hidden md:flex items-center space-x-8">
              ${navButton("Home", "home")}
              ${navButton("Explore", "explore")}
              ${navButton("Sell", "sell")}

              <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                ${isDarkMode() ? "☀️" : "🌙"}
              </button>

              <button onclick="navigate('login')" class="bg-collex-dark dark:bg-white text-white dark:text-collex-dark px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wider">
                Log In
              </button>
            </div>

            <div class="md:hidden flex items-center space-x-4">
              <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                ${isDarkMode() ? "☀️" : "🌙"}
              </button>
              <button onclick="toggleMenu()" class="text-gray-900 dark:text-white">
                ${isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        <div id="mobileMenu" class="${isOpen ? "" : "hidden"} md:hidden bg-white dark:bg-collex-dark border-t border-gray-100 dark:border-gray-800">
          <div class="px-4 pt-4 pb-6 space-y-2">
            ${mobileButton("Home", "home")}
            ${mobileButton("Explore", "explore")}
            ${mobileButton("Sell", "sell")}
            <button onclick="navigate('login')" class="w-full text-left px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wider text-collex-teal">
              Log In
            </button>
          </div>
        </div>
      </nav>
    `;
  }

  window.toggleMenu = function () {
    isOpen = !isOpen;
    renderNavbar();
  };

  window.navigate = navigate;
  window.toggleTheme = toggleTheme;

  renderNavbar();
}
