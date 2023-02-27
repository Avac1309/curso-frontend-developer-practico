const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu-amburguesa");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const menuCarritoAside = document.querySelector(".navbar-shopping-cart");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoAside.addEventListener("click", toggleCarritoAside);

// //Para abrir y cerrar ventanas del meno en una solo funcion
// function toggleDesktopMenu(){
//     console.log("Click en el email")
//     desktopMenu.classList.toggle("inactive")
// }

// function toggleMobileMenu() {
//     console.log("Click al mobilMenu")
//     mobileMenu.classList.toggle("inactive")
// }

//Para hacer que mientras se habra una ventana, la otra se cierra😳

function toggleDesktopMenu() {
    //esta abierto = se abrira
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) { //aqui esta cerrado
        aside.classList.add('inactive'); //con esta se abrira 
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() { 
     //esta abierto = se abrira
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {//aqui esta cerrado
        aside.classList.add('inactive'); //con esta se abrira 
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
     //esta abierto = se abrira
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {//aqui esta cerrado
        mobileMenu.classList.add('inactive'); //con esta se abrira 
    }
    
    aside.classList.toggle('inactive');
}
