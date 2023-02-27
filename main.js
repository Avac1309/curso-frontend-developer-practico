const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu-amburguesa");
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    console.log("Click en el email")
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    console.log("Click al mobilMenu")
    mobileMenu.classList.toggle("inactive")
}