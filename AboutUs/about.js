


let hamburger = document.querySelector('.hamb-main');
let navbar = document.querySelector('.nav');
let nav_ul = document.querySelector('.ul-nav');
let hamb1 = document.querySelector('.h-resp1');
let hamb2 = document.querySelector('.h-resp2');
let header = document.querySelector('.header');


hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle('nav-resp');
    nav_ul.classList.toggle('ul-resp');
    
    if (header.classList.contains("head-resp")){

        header.classList.remove("head-resp");
    } else {
        header.classList.add("head-resp");
    }

})