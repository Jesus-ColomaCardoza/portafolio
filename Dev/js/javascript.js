const header = document.querySelector(".main-header__container");
const titleh = document.querySelector(".main-header__title");
const buttonG = document.querySelector(".button--cv");
const mainNav = document.getElementById('main-nav');
const mainMenuNav = document.getElementById('main-menu--nav')
const preloaderContainer = document.getElementById('preloader__container');
const body = document.getElementById('body');

//preloader
setTimeout(() => {
    preloaderContainer.classList.add('hide')
    body.classList.add('show-overflowy')
}, 2000);

//header
window.addEventListener("scroll", () => {
    header.classList.toggle("main-header__container--blanco", window.scrollY > 0);

    titleh.classList.toggle("main-header__title--black", window.scrollY > 0);

    buttonG.classList.toggle("button--black", window.scrollY > 0);

    mainNav.classList.toggle("main-nav--black", window.scrollY > 0);

    mainMenuNav.classList.toggle("main-menu--black", window.scrollY > 0);
});

//menu
mainNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-bars') ||
        e.target.classList.contains('main-menu__text') ||
        e.target.classList.contains('main-menu__icon')) {

        mainMenuNav.classList.toggle('main-menu--show')
    }
})