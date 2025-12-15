function Footer() {
  const year = new Date().getFullYear();

  document.getElementById("footer").innerHTML = `
    <footer class="bg-collex-dark dark:bg-black text-gray-400 py-12 border-t border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">

          <div class="mb-6 md:mb-0 text-center md:text-left">
            <span class="text-white font-black text-2xl uppercase tracking-tighter">
              COLLEX
            </span>
            <p class="text-xs mt-2 uppercase tracking-widest text-gray-500">
              © ${year} Campus Marketplace.
            </p>
          </div>

          <div class="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" class="hover:text-collex-teal transition-colors">Privacy</a>
            <a href="#" class="hover:text-collex-teal transition-colors">Terms</a>
            <a href="#" class="hover:text-collex-teal transition-colors">Support</a>
          </div>

        </div>
      </div>
    </footer>
  `;
}
