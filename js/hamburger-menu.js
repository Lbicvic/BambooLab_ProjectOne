let hamburger = document.getElementsByClassName('nav__hamburger-menu');
let htmlNav = document.querySelector('nav')
let htmlMain = document.querySelector('main')
let htmlFooter = document.querySelector('footer')
let menu = document.getElementsByClassName('hamburger-menu')

for (let i=0; i<2; i++) {
    hamburger[i].addEventListener('click',()=>{
        htmlNav.classList.toggle("hidden-body")
        htmlMain.classList.toggle("hidden-body")
        htmlFooter.classList.toggle("hidden-body")
        menu[0].classList.toggle("show-hamburger-menu")
    })
}
