const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const navMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopmenu);
navMobile.addEventListener('click', toggleMobiletopmenu);


function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobiletopmenu() {
    mobileMenu.classList.toggle('inactive');
}