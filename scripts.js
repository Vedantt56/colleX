// small script: set year and mobile toggle
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('mobileToggle');
if(toggle){
  toggle.addEventListener('click', () => {
    // Simple fallback mobile menu (extend as you like)
    const nav = document.querySelector('.main-nav');
    if(!nav) return;
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });
}
