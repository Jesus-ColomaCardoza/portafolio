//header
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

//preloader
const preloaderContainer=document.getElementById('preloader__container');
const body=document.getElementById('body');
setTimeout(()=>{
    preloaderContainer.classList.add('close')
    body.classList.add('show-overflowy')
},3000);


//menu
const mainNav=document.getElementById('main-nav');
const mainMenuNav=document.getElementById('main-menu--nav')
mainNav.addEventListener('click',(e)=>{
    if (e.target.classList.contains('button-bars') ||e.target.classList.contains('main-menu__text')) {
        mainMenuNav.classList.toggle('main-menu--show')
    }
    
})