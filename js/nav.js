window.onscroll = function () {
    'use strict';
    const nav_menu_bar = document.querySelector("nav");

    if (document.documentElement.scrollTop > (document.querySelector("#particles-js").clientHeight / 2) - (document.querySelector(".welcome").clientHeight)- (document.querySelector(".name").clientHeight) - document.querySelector("nav").clientHeight || document.body.scrollTop > (document.querySelector("#particles-js").clientHeight / 2) - (document.querySelector(".welcome").clientHeight) - (document.querySelector(".name").clientHeight) - document.querySelector("nav").clientHeight) {
        nav_menu_bar.classList.add("nav-background");
    } else {
        nav_menu_bar.classList.remove("nav-background");
    }
};

document.querySelector(".menu-burger").addEventListener("click",function () {
    const  nav_menu = document.querySelector(".nav-menu");
    if (nav_menu.style.display === "block") {
        nav_menu.style.display = "";
    } else {
        nav_menu.style.display = "block";
    }
});