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
    },
    loop:true,
    
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