const mobileMenu = document.querySelector('#mobile-menu');
const humburger = document.querySelector('#humburger');
humburger.addEventListener('click', () => {
    mobileMenu.classList.toggle("mobile-menu-active");
})