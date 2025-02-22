var swiper = new Swiper(".home-slider",{
    effect: "coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadow:true,
    }
    
    
});
var swiper = new Swiper(".home-slider1",{
    effect: "coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadow:true,
    },
    loop:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
});
var swiper = new Swiper(".home-slider2",{
    effect: "coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadow:true,
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
});


document.getElementById('menu-bar').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle a class to show/hide the navbar
});