'use strict';
/* ------------- Add Event on Element ------------- */
const addEventOnElem = function (elem, type, callback){
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else {
        elem.addEventListener(type, callback);
    }
}
/* ------------- Toggle Navbar ------------- */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}
addEventOnElem(navToggler, "click", toggleNavbar);
const closeNavbar = function (){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}
addEventOnElem(navbarLinks, "click", closeNavbar);

/* ------------- Header Active ------------- */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function (){
    if (window.scrollY > 100){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})