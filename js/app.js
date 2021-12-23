const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const shoppingCart = document.querySelector(".shopping_cart");
const loginBtn = document.querySelector("#login-btn")
const loginForm = document.querySelector(".login_form");
const menuBar = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");



searchBtn.addEventListener('click',()=>{
    
    searchForm.classList.toggle("active");
    searchBtn.classList.toggle('fa-times');
    loginForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navBar.classList.remove("active");
})

cartBtn.addEventListener("click", ()=>{
    shoppingCart.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
});

loginBtn.addEventListener("click",()=>{
    loginForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
});

menuBar.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    loginForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
});
window.addEventListener("scroll",()=>{
    loginForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
});


var swiper = new Swiper(".product_slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
     
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});


var swiper = new Swiper(".customer_slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });
  
