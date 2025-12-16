function Navbar() {
  let isOpen = false;

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  /* ---------- AUTH STATE ---------- */
  const userEmail = localStorage.getItem("collex_user");
  const isLoggedIn = !!userEmail;

  /* ---------- NAVIGATION ---------- */
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

    if (page === "listing") {
      window.location.href = isRoot
        ? "pages/listing.html"
        : "listing.html";
    }

    if (page === "login") {
      window.location.href = isRoot ? "pages/login.html" : "login.html";
    }
  }

  /* ---------- LOGOUT ---------- */
  function logout() {
    localStorage.removeItem("collex_user");
    navigate("login");
  }

  /* ---------- ACTIVE STATE ---------- */
  function isActive(page) {
    if (page === "home" && currentPage === "index.html") return true;
    return currentPage === `${page}.html`;
  }

  /* ---------- THEME ---------- */
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    renderNavbar();
  }

  function isDarkMode() {
    return document.documentElement.classList.contains("dark");
  }

  /* ---------- BUTTON HELPERS ---------- */
  function navButton(label, page) {
    return `
      <button onclick="navigate('${page}')"
        class="text-sm font-bold uppercase tracking-wider ${
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
      <button onclick="navigate('${page}')"
        class="block w-full text-left px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wider ${
          isActive(page)
            ? "bg-gray-100 dark:bg-gray-800 text-collex-teal"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        }">
        ${label}
      </button>
    `;
  }

  /* ---------- RENDER ---------- */
  function renderNavbar() {
    const initials = userEmail ? userEmail[0].toUpperCase() : "";

    document.getElementById("navbar").innerHTML = `
      <nav class="bg-white/90 dark:bg-collex-dark/90 backdrop-blur-md 
                  fixed top-0 left-0 w-full z-50 
                  border-b border-gray-100 dark:border-gray-800">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">

            <!-- LOGO -->
            <div class="flex items-center space-x-2 cursor-pointer"
                 onclick="navigate('home')">
              <div class="bg-collex-dark dark:bg-white p-1.5 rounded-lg">🛍️</div>
              <span class="font-extrabold text-xl tracking-tighter 
                           text-gray-900 dark:text-white uppercase">
                COLLE<span class="text-collex-teal">X</span>
              </span>
            </div>

            <!-- DESKTOP -->
            <div class="hidden md:flex items-center space-x-8">
              ${navButton("Home", "home")}
              ${navButton("Explore", "explore")}
              ${navButton("Sell", "sell")}
              ${navButton("My Listings", "listing")}

              <button onclick="toggleTheme()"
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                ${isDarkMode() ? "☀️" : "🌙"}
              </button>

              ${
                isLoggedIn
                  ? `
                    <div class="flex items-center space-x-4">
                      <div class="w-9 h-9 rounded-full bg-collex-teal 
                                  text-white flex items-center justify-center font-bold">
                        ${initials}
                      </div>
                      <button onclick="logout()"
                        class="text-sm font-bold uppercase tracking-wider 
                               text-red-500 hover:text-red-600">
                        Log Out
                      </button>
                    </div>
                  `
                  : `
                    <button onclick="navigate('login')"
                      class="bg-collex-dark dark:bg-white 
                             text-white dark:text-collex-dark 
                             px-6 py-2 rounded-sm text-sm 
                             font-bold uppercase tracking-wider">
                      Log In
                    </button>
                  `
              }
            </div>

            <!-- MOBILE -->
            <div class="md:hidden flex items-center space-x-4">
              <button onclick="toggleTheme()"
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                ${isDarkMode() ? "☀️" : "🌙"}
              </button>
              <button onclick="toggleMenu()" class="text-xl">
                ${isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        <!-- MOBILE MENU -->
        <div class="${isOpen ? "" : "hidden"} md:hidden 
                    bg-white dark:bg-collex-dark 
                    border-t border-gray-100 dark:border-gray-800">
          <div class="px-4 pt-4 pb-6 space-y-2">
            ${mobileButton("Home", "home")}
            ${mobileButton("Explore", "explore")}
            ${mobileButton("Sell", "sell")}
            ${mobileButton("My Listings", "listing")}

            ${
              isLoggedIn
                ? `<button onclick="logout()"
                    class="w-full text-left px-4 py-3 rounded-md 
                           text-sm font-bold uppercase tracking-wider 
                           text-red-500">
                    Log Out
                   </button>`
                : `<button onclick="navigate('login')"
                    class="w-full text-left px-4 py-3 rounded-md 
                           text-sm font-bold uppercase tracking-wider 
                           text-collex-teal">
                    Log In
                   </button>`
            }
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
  window.logout = logout;

  renderNavbar();
}

Navbar();
