const hamburger = document.getElementsByClassName('nav__hamburger-menu');
const htmlNav = document.querySelector('nav')
const htmlMain = document.querySelector('main')
const htmlFooter = document.querySelector('footer')
const menu = document.getElementsByClassName('hamburger-menu')
const html = document.querySelector('html')
const htmlBody = document.querySelector('body')

for (let i = 0; i < 2; i++) {
    hamburger[i].addEventListener('click', () => {
        html.style.height = "100%";
        htmlBody.style.height = "100%";
        htmlNav.classList.toggle("hidden-body")
        htmlMain.classList.toggle("hidden-body")
        htmlFooter.classList.toggle("hidden-body")
        menu[0].classList.toggle("show-hamburger-menu")
    })
}
