const menu_btn = document.querySelector('.menu-btn')
const close_btn = document.querySelector('.close-btn')
const navlinks = document.querySelector('.nav-links')
menu_btn.addEventListener('click', () => {
    navlinks.classList.add('active')
})
close_btn.addEventListener('click', () => {
    navlinks.classList.remove('active')
})