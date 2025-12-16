function renderLogin() {
  // ✅ If already logged in, redirect to home
  const savedEmail = localStorage.getItem("collex_user");
  if (savedEmail) {
    window.location.href = "../index.html";
    return;
  }

  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="min-h-screen bg-gray-50 dark:bg-collex-darker flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300">

      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
          Sign In
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Or
          <button onclick="goHome()" class="font-bold text-collex-teal hover:text-white transition-colors">
            return to home
          </button>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white dark:bg-collex-dark py-8 px-4 shadow sm:px-10 border border-gray-100 dark:border-gray-800">

          <form id="loginForm" class="space-y-6">

            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                id="emailInput"
                type="email"
                required
                class="mt-2 block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-1 focus:ring-collex-teal focus:border-collex-teal sm:text-sm"
              />
              <p id="emailError" class="hidden text-xs text-red-500 mt-2">
                Please enter a valid email address.
              </p>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                required
                class="mt-2 block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-1 focus:ring-collex-teal focus:border-collex-teal sm:text-sm"
              />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center text-sm text-gray-900 dark:text-gray-300">
                <input type="checkbox" class="h-4 w-4 text-collex-teal border-gray-300 rounded mr-2">
                Remember me
              </label>

              <a href="#" class="text-sm font-medium text-collex-teal hover:text-white">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              class="w-full py-3 px-4 font-bold uppercase tracking-widest text-white bg-collex-dark dark:bg-black hover:bg-collex-teal transition-colors"
            >
              Sign in
            </button>
          </form>

          <div class="mt-8">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white dark:bg-collex-dark text-gray-500 uppercase tracking-wide text-xs">
                  New to COLLEX?
                </span>
              </div>
            </div>

            <div class="mt-8">
              <button onclick="goHome()"
                class="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 font-bold uppercase tracking-widest text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Create Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  document.getElementById("loginForm").addEventListener("submit", handleLogin);
}

function handleLogin(e) {
  e.preventDefault();

  const emailInput = document.getElementById("emailInput");
  const errorText = document.getElementById("emailError");
  const email = emailInput.value.trim();

  // ✅ Simple validation using "@"
  if (!email.includes("@")) {
    errorText.classList.remove("hidden");
    return;
  }

  errorText.classList.add("hidden");

  // ✅ Remember login
  localStorage.setItem("collex_user", email);

  // Redirect to home
  window.location.href = "../index.html";
}

function goHome() {
  window.location.href = "../index.html";
}

renderLogin();
