
window.addEventListener("scroll",function(){
    let header=document.querySelector(".main-header__container");
    header.classList.toggle("main-header__container--blanco",window.scrollY>0);

    let nav=document.querySelectorAll(".main-nav");
    let arrayNav=Array.from(nav);
    arrayNav.map((a)=>{
        a.classList.toggle("main-nav--blue",window.scrollY>0);
    });

    let menu=document.querySelector(".main-nav--mobile .main-menu");
    menu.classList.toggle("main-menu--blue",window.scrollY>0);
    
    let titleh=document.querySelector(".main-header__title");
    titleh.classList.toggle("main-header__title--morado",window.scrollY>0);

    let buttonG=document.querySelector(".button--email");
    buttonG.classList.toggle("button--blue",window.scrollY>0);

});