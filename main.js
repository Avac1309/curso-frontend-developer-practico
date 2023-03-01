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
    //esta cerrado = se abrira
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) { //aqui esta cerrado
        mobileMenu.classList.add('inactive'); //con esta se abrira 
    }
    
    aside.classList.toggle('inactive');
}

// Lista de productos: HTML a partir de arrays ----------------------------------------------------------------
const productList = []; //estos son los productos que apareceran 
productList.push({
    name: "Bike",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    id: "product-card-image-article",
})
productList.push({
    name: "Computadora",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    id: "product-card-image-article",
})
productList.push({
    name: "Pantalla",
    price: 230,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    id: "product-card-image-article",
})
productList.push({
    name: "Monitor",
    price: 900,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    id: "product-card-image-article",
})

function renderProducts(productList) {
    for (product of productList) {
        
        const htmlCards = `<div class="product-card">
        <img src= ${product.image} alt="" id=${product.id}>
        <div class="product-info">
        <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
            </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>  `
                    
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.innerHTML += htmlCards
    }
}
renderProducts(productList);

// Click en el image 
const funcionnImage = document.querySelector("#product-card-image-article");
const productDetailSecondary = document.querySelector(".product-detail-secondary")
const productDetailSecondaryClose = document.querySelector(".product-detail-secondary-close");

funcionnImage.addEventListener("click", openFuncionImagen);
productDetailSecondaryClose.addEventListener("click", closeFuncionImage)

function openFuncionImagen() {
    console.log("cLick en el image")
        productDetailSecondary.classList.remove("inactive")
}

function closeFuncionImage() {
    productDetailSecondary.classList.add("inactive")
}