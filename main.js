const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    console.log("Click en el email")
    desktopMenu.classList.toggle("inactive")
}