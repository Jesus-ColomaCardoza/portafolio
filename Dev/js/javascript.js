
window.addEventListener("scroll",function(){
    let header=document.querySelector(".main-header");
    header.classList.toggle("main-header--blanco",window.scrollY>0);

    let nav=document.querySelector(".main-nav");
    nav.classList.toggle("main-nav--azul",window.scrollY>0);

    let titleh=document.querySelector(".main-header__title");
    titleh.classList.toggle("main-header__title--morado",window.scrollY>0);

});