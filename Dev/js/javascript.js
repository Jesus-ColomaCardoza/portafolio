const header = document.querySelector('.main-header__container');
const titleh = document.querySelector('.main-header__title');
const buttonG = document.querySelector(".button--cv");
const mainNav = document.getElementById('main-nav');
const mainMenuNav = document.getElementById('main-menu--nav')
const preloaderContainer = document.getElementById('preloader__container');
const body = document.getElementById('body');
const typing12 = document.getElementById('typing1');
const typing13 = document.getElementById('typing2');


const changeColorHeader = (condition) => {
    header.classList.toggle("main-header__container--blanco", condition);

    titleh.classList.toggle("main-header__title--black", condition);

    buttonG.classList.toggle("button--black", condition);

    mainNav.classList.toggle("main-nav--black", condition);

    mainMenuNav.classList.toggle("main-menu--black", condition);
}

//preloader
setTimeout(() => {
    preloaderContainer.classList.add('hide')
    body.classList.add('show-overflowy')
}, 2000);

//animation typing
setTimeout(() => {
    typing12.classList.add('typing--12');
}, 2000);
setTimeout(() => {
    typing13.classList.add('typing--13');
}, 8000);

//header
window.addEventListener("scroll", () => {
    changeColorHeader(window.scrollY > 0);
});

//menu
mainNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-bars') ||
        e.target.classList.contains('main-menu__text') ||
        e.target.classList.contains('main-menu__icon') ||
        e.target.classList.contains('main-menu__link')) {


        mainMenuNav.classList.toggle('main-menu--show')

        if (window.scrollY == 0) {
            changeColorHeader()
        }
    }
})