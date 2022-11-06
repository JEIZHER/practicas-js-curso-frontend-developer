const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


const navMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const  navShoppingCart= document.querySelector('.navbar-shopping-cart');
const  productDetail= document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopmenu);
navMobile.addEventListener('click', toggleMobiletopmenu);
navShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobiletopmenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');

}

function  toggleShoppingCart() {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
  

}