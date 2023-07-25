let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=> {
    searchForm.classList.toggle("active");
    userForm.classList.remove("active");
    cartForm.classList.remove("active");
    menuForm.classList.remove("active");
}
let cartForm=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=> {
    cartForm.classList.toggle("active");
    userForm.classList.remove("active");
    searchForm.classList.remove("active");
    menuForm.classList.remove("active");
}

let userForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=> {
    userForm.classList.toggle("active");
    cartForm.classList.remove("active");
    searchForm.classList.remove("active");
    menuForm.classList.remove("active");
}

let menuForm=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=> {
    menuForm.classList.toggle("active");
    userForm.classList.remove("active");
    cartForm.classList.remove("active");
    searchForm.classList.remove("active");
    
}
window.onscroll=()=> {
    userForm.classList.remove("active");
    cartForm.classList.remove("active");
    searchForm.classList.remove("active");
    menuForm.classList.remove("active");
}

var swiper = new Swiper(".myswiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    loop:true,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper1 = new Swiper(".review", {
  
    pagination: {
      el: ".swiper-pagination",
      
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });