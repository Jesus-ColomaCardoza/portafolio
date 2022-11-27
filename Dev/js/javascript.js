
window.addEventListener("scroll",function(){
    let header=document.querySelector(".main-header__container");
    header.classList.toggle("main-header__container--blanco",window.scrollY>0);

    let nav=document.querySelector(".main-nav");
    nav.classList.toggle("main-nav--blue",window.scrollY>0);
    
    let titleh=document.querySelector(".main-header__title");
    titleh.classList.toggle("main-header__title--morado",window.scrollY>0);

    let buttonG=document.querySelector(".button--email");
    buttonG.classList.toggle("button--blue",window.scrollY>0);

});