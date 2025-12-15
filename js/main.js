// Restore theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Load layout components
Navbar();
Footer();
