
window.addEventListener("scroll",function(){
    let header=document.querySelector(".main-header__container");
    header.classList.toggle("main-header__container--blanco",window.scrollY>0);

    let nav=document.querySelectorAll(".main-nav");
    let arrayNav=Array.from(nav);
    arrayNav.map((a)=>{
        a.classList.toggle("main-nav--black",window.scrollY>0);
    });

    
    let titleh=document.querySelector(".main-header__title");
    titleh.classList.toggle("main-header__title--black",window.scrollY>0);

    let buttonG=document.querySelector(".button--email");
    buttonG.classList.toggle("button--black",window.scrollY>0);

});