const openBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

const navBar = document.querySelector('.navbar');

function toggleMenu() {
    navBar.classList.toggle('active');
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


/**
 * Header section for the scroll
 */
const header = document.querySelector("[data-header]");

const headerActive = function () {
    window.scrollY > 100 
    ? header.classList.add("active")
    :  header.classList.remove("active");
}
window.addEventListener('scroll', headerActive);
